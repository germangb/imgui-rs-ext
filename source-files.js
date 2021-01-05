var N = null;var sourcesIndex = {};
sourcesIndex["addr2line"] = {"name":"","files":["lazy.rs","lib.rs"]};
sourcesIndex["adler"] = {"name":"","files":["algo.rs","lib.rs"]};
sourcesIndex["backtrace"] = {"name":"","dirs":[{"name":"backtrace","files":["libunwind.rs","mod.rs"]},{"name":"symbolize","dirs":[{"name":"gimli","files":["elf.rs","mmap_unix.rs","stash.rs"]}],"files":["gimli.rs","mod.rs"]}],"files":["capture.rs","lib.rs","print.rs","types.rs"]};
sourcesIndex["bitflags"] = {"name":"","files":["lib.rs"]};
sourcesIndex["cfg_if"] = {"name":"","files":["lib.rs"]};
sourcesIndex["failure"] = {"name":"","dirs":[{"name":"backtrace","files":["internal.rs","mod.rs"]},{"name":"error","files":["error_impl.rs","mod.rs"]}],"files":["as_fail.rs","box_std.rs","compat.rs","context.rs","error_message.rs","lib.rs","macros.rs","result_ext.rs","sync_failure.rs"]};
sourcesIndex["failure_derive"] = {"name":"","files":["lib.rs"]};
sourcesIndex["gimli"] = {"name":"","dirs":[{"name":"read","files":["abbrev.rs","addr.rs","aranges.rs","cfi.rs","dwarf.rs","endian_slice.rs","line.rs","lists.rs","loclists.rs","lookup.rs","mod.rs","op.rs","pubnames.rs","pubtypes.rs","reader.rs","rnglists.rs","str.rs","unit.rs","value.rs"]}],"files":["arch.rs","common.rs","constants.rs","endianity.rs","leb128.rs","lib.rs"]};
sourcesIndex["imgui"] = {"name":"","dirs":[{"name":"fonts","files":["atlas.rs","font.rs","glyph.rs","glyph_ranges.rs","mod.rs"]},{"name":"input","files":["keyboard.rs","mod.rs","mouse.rs"]},{"name":"render","files":["draw_data.rs","mod.rs","renderer.rs"]},{"name":"widget","files":["color_editors.rs","combo_box.rs","image.rs","menu.rs","misc.rs","mod.rs","progress_bar.rs","selectable.rs","slider.rs","text.rs"]},{"name":"window","files":["child_window.rs","content_region.rs","mod.rs","scroll.rs"]}],"files":["clipboard.rs","columns.rs","context.rs","drag.rs","input_widget.rs","internal.rs","io.rs","layout.rs","legacy.rs","lib.rs","plothistogram.rs","plotlines.rs","popup_modal.rs","stacks.rs","string.rs","style.rs","trees.rs","utils.rs","window_draw_list.rs"]};
sourcesIndex["imgui_ext_derive"] = {"name":"","files":["error.rs","lib.rs","parser.rs"]};
sourcesIndex["imgui_sys"] = {"name":"","files":["bindings.rs","lib.rs"]};
sourcesIndex["lazy_static"] = {"name":"","files":["inline_lazy.rs","lib.rs"]};
sourcesIndex["libc"] = {"name":"","dirs":[{"name":"unix","dirs":[{"name":"linux_like","dirs":[{"name":"linux","dirs":[{"name":"gnu","dirs":[{"name":"b64","dirs":[{"name":"x86_64","files":["align.rs","mod.rs","not_x32.rs"]}],"files":["mod.rs"]}],"files":["align.rs","mod.rs"]}],"files":["align.rs","mod.rs"]}],"files":["mod.rs"]}],"files":["align.rs","mod.rs"]}],"files":["fixed_width_ints.rs","lib.rs","macros.rs"]};
sourcesIndex["lock_api"] = {"name":"","files":["lib.rs","mutex.rs","remutex.rs","rwlock.rs"]};
sourcesIndex["maybe_uninit"] = {"name":"","files":["lib.rs"]};
sourcesIndex["miniz_oxide"] = {"name":"","dirs":[{"name":"deflate","files":["buffer.rs","core.rs","mod.rs","stream.rs"]},{"name":"inflate","files":["core.rs","mod.rs","output_buffer.rs","stream.rs"]}],"files":["lib.rs","shared.rs"]};
sourcesIndex["object"] = {"name":"","dirs":[{"name":"read","dirs":[{"name":"coff","files":["comdat.rs","file.rs","mod.rs","relocation.rs","section.rs","symbol.rs"]},{"name":"elf","files":["comdat.rs","compression.rs","file.rs","mod.rs","note.rs","relocation.rs","section.rs","segment.rs","symbol.rs"]},{"name":"macho","files":["file.rs","load_command.rs","mod.rs","relocation.rs","section.rs","segment.rs","symbol.rs"]},{"name":"pe","files":["file.rs","mod.rs","section.rs"]}],"files":["any.rs","archive.rs","mod.rs","traits.rs","util.rs"]}],"files":["archive.rs","common.rs","elf.rs","endian.rs","lib.rs","macho.rs","pe.rs","pod.rs"]};
sourcesIndex["parking_lot"] = {"name":"","files":["condvar.rs","deadlock.rs","elision.rs","lib.rs","mutex.rs","once.rs","raw_mutex.rs","raw_rwlock.rs","remutex.rs","rwlock.rs","util.rs"]};
sourcesIndex["parking_lot_core"] = {"name":"","dirs":[{"name":"thread_parker","files":["linux.rs","mod.rs"]}],"files":["lib.rs","parking_lot.rs","spinwait.rs","util.rs","word_lock.rs"]};
sourcesIndex["proc_macro2"] = {"name":"","files":["detection.rs","fallback.rs","lib.rs","marker.rs","parse.rs","wrapper.rs"]};
sourcesIndex["quote"] = {"name":"","files":["ext.rs","format.rs","ident_fragment.rs","lib.rs","runtime.rs","spanned.rs","to_tokens.rs"]};
sourcesIndex["rustc_demangle"] = {"name":"","files":["legacy.rs","lib.rs","v0.rs"]};
sourcesIndex["scopeguard"] = {"name":"","files":["lib.rs"]};
sourcesIndex["smallvec"] = {"name":"","files":["lib.rs"]};
sourcesIndex["syn"] = {"name":"","dirs":[{"name":"gen","files":["clone.rs","debug.rs","eq.rs","gen_helper.rs","hash.rs","visit.rs"]}],"files":["attr.rs","await.rs","bigint.rs","buffer.rs","custom_keyword.rs","custom_punctuation.rs","data.rs","derive.rs","discouraged.rs","error.rs","export.rs","expr.rs","ext.rs","generics.rs","group.rs","ident.rs","lib.rs","lifetime.rs","lit.rs","lookahead.rs","mac.rs","macros.rs","op.rs","parse.rs","parse_macro_input.rs","parse_quote.rs","path.rs","print.rs","punctuated.rs","sealed.rs","span.rs","spanned.rs","thread.rs","token.rs","tt.rs","ty.rs","verbatim.rs"]};
sourcesIndex["synstructure"] = {"name":"","files":["lib.rs","macros.rs"]};
sourcesIndex["unicode_xid"] = {"name":"","files":["lib.rs","tables.rs"]};
createSourceSidebar();
