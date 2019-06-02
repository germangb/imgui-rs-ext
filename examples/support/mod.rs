use imgui::Ui;
use imgui_ext::{Gui, UiExt};

#[cfg(feature = "ci")]
mod dummy {
    use imgui::Ui;
    pub fn run<F: FnMut(&Ui)>(_: &str, _: (u32, u32), _: F) -> Result<(), ()> {
        Ok(())
    }
}
#[cfg(not(feature = "ci"))]
mod sdl;

#[cfg(feature = "ci")]
use dummy as backend;
#[cfg(not(feature = "ci"))]
use sdl as backend;

#[derive(Debug, Clone)]
pub struct Window {
    pub color: [f32; 4],
    running: bool,
}

impl Window {
    fn default() -> Self {
        Self {
            color: [0.2, 0.2, 0.2, 1.0],
            running: true,
        }
    }

    pub fn close(&mut self) {
        self.running = false;
    }
}

pub fn run_custom<F: FnMut(&mut Window, &Ui)>(title: &str, size: (u32, u32), app: F) {
    backend::run(title, size, app).unwrap();
}

pub fn run<T: Gui + std::fmt::Debug>(title: &str, size: (u32, u32), mut gui: T) {
    run_custom(title, size, |_, ui| {
        ui.columns(2, imgui::im_str!("columns"), true);
        ui.draw_gui(&mut gui);
        ui.next_column();
        ui.text_wrapped(imgui::im_str!("{:#?}", gui));
    })
}