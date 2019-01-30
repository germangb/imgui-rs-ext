use std::error::Error;

use imgui::{ImGui, Ui};

pub fn run<F: FnMut(&Ui)>(
    title: &str,
    (w, h): (u32, u32),
    mut user: F,
) -> Result<(), Box<dyn Error>> {
    let sdl = sdl2::init()?;
    let video = sdl.video()?;
    let window = video
        .window(title, w, h)
        .opengl()
        .position_centered()
        .build()?;

    let glctx = window.gl_create_context()?;
    window.gl_make_current(&glctx)?;

    let mut imgui = ImGui::init();
    /*
    // Fix incorrect colors with sRGB framebuffer
    fn imgui_gamma_to_linear(col: imgui::ImVec4) -> imgui::ImVec4 {
        let x = col.x.powf(1.5);
        let y = col.y.powf(1.5);
        let z = col.z.powf(1.5);
        let w = 1.0 - (1.0 - col.w).powf(1.5);
        imgui::ImVec4::new(x, y, z, w)
    }
    let style = imgui.style_mut();
    for col in 0..style.colors.len() {
        style.colors[col] = imgui_gamma_to_linear(style.colors[col]);
    }
    */
    let mut imgui_sdl2 = imgui_sdl2::ImguiSdl2::new(&mut imgui);

    let renderer =
        imgui_opengl_renderer::Renderer::new(&mut imgui, |s| video.gl_get_proc_address(s) as _);
    gl::load_with(|s| video.gl_get_proc_address(s) as _);

    let mut event_pump = sdl.event_pump()?;
    'mainloop: loop {
        for event in event_pump.poll_iter() {
            imgui_sdl2.handle_event(&mut imgui, &event);
            if let &sdl2::event::Event::Window {
                win_event: sdl2::event::WindowEvent::Close,
                ..
            } = &event
            {
                break 'mainloop;
            }
            if imgui_sdl2.ignore_event(&event) {
                continue;
            }
        }

        unsafe {
            //gl::ClearColor(0.5, 0.5, 0.5, 1.0);
            gl::ClearColor(1.0, 1.0, 1.0, 1.0);
            gl::Clear(gl::COLOR_BUFFER_BIT);
        }

        let ui = imgui_sdl2.frame(&window, &mut imgui, &event_pump.mouse_state());
        user(&ui);
        renderer.render(ui);

        window.gl_swap_window();
    }
    Ok(())
}
