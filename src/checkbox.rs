//! ## Optional fields
//!
//! * `label`
//! * `catch`
//!
//! ## Example
//!
//! ```
//! use imgui_ext::prelude::*;
//!
//! #[derive(ImGuiExt)]
//! struct Checkboxes {
//!     // All parameters are optional.
//!     #[imgui(checkbox)]
//!     turbo: bool,
//!
//!     // Optionally, you can override the label:
//!     #[imgui(checkbox(label = "Checkbox!"))]
//!     check: bool,
//! }
//! ```
//!
//! ### Result
//!
//! ![][result]
//!
//! [result]: https://i.imgur.com/1hTR89V.png
use imgui::{ImStr, Ui};

/// Structure generated by the annoration.
#[derive(Copy, Clone)]
pub struct CheckboxParams<'ui> {
    pub label: &'ui ImStr,
}

/// Trait for types that can be represented with a checkbox.
pub trait Checkbox {
    fn build(ui: &Ui, elem: &mut Self, params: CheckboxParams) -> bool;
}

impl Checkbox for bool {
    fn build(ui: &Ui, elem: &mut Self, params: CheckboxParams) -> bool {
        ui.checkbox(params.label, elem)
    }
}
