(function() {var implementors = {};
implementors["backtrace"] = [{"text":"impl UnwindSafe for Frame","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Symbol","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for SymbolName&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, 'b&gt; !UnwindSafe for BacktraceFmt&lt;'a, 'b&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'fmt, 'a, 'b&gt; !UnwindSafe for BacktraceFrameFmt&lt;'fmt, 'a, 'b&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Backtrace","synthetic":true,"types":[]},{"text":"impl UnwindSafe for BacktraceFrame","synthetic":true,"types":[]},{"text":"impl UnwindSafe for BacktraceSymbol","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for BytesOrWideString&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PrintFmt","synthetic":true,"types":[]}];
implementors["failure"] = [{"text":"impl UnwindSafe for Backtrace","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; UnwindSafe for Compat&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;D&gt; !UnwindSafe for Context&lt;D&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for SyncFailure&lt;T&gt;","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl&lt;'f&gt; !UnwindSafe for Causes&lt;'f&gt;","synthetic":true,"types":[]}];
implementors["imgui"] = [{"text":"impl !UnwindSafe for Context","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for SuspendedContext","synthetic":true,"types":[]},{"text":"impl&lt;'ui, 'p&gt; !UnwindSafe for DragFloat&lt;'ui, 'p&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'ui, 'p&gt; !UnwindSafe for DragFloat2&lt;'ui, 'p&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'ui, 'p&gt; !UnwindSafe for DragFloat3&lt;'ui, 'p&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'ui, 'p&gt; !UnwindSafe for DragFloat4&lt;'ui, 'p&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'ui, 'p&gt; !UnwindSafe for DragFloatRange2&lt;'ui, 'p&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'ui, 'p&gt; !UnwindSafe for DragInt&lt;'ui, 'p&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'ui, 'p&gt; !UnwindSafe for DragInt2&lt;'ui, 'p&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'ui, 'p&gt; !UnwindSafe for DragInt3&lt;'ui, 'p&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'ui, 'p&gt; !UnwindSafe for DragInt4&lt;'ui, 'p&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'ui, 'p&gt; !UnwindSafe for DragIntRange2&lt;'ui, 'p&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for FontAtlasFlags","synthetic":true,"types":[]},{"text":"impl UnwindSafe for FontId","synthetic":true,"types":[]},{"text":"impl UnwindSafe for FontAtlas","synthetic":true,"types":[]},{"text":"impl UnwindSafe for FontConfig","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for FontAtlasTexture&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SharedFontAtlas","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Font","synthetic":true,"types":[]},{"text":"impl UnwindSafe for FontGlyph","synthetic":true,"types":[]},{"text":"impl UnwindSafe for FontGlyphRanges","synthetic":true,"types":[]},{"text":"impl&lt;'ui, 'p&gt; !UnwindSafe for InputFloat&lt;'ui, 'p&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'ui, 'p&gt; !UnwindSafe for InputFloat2&lt;'ui, 'p&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'ui, 'p&gt; !UnwindSafe for InputFloat3&lt;'ui, 'p&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'ui, 'p&gt; !UnwindSafe for InputFloat4&lt;'ui, 'p&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'ui, 'p&gt; !UnwindSafe for InputInt&lt;'ui, 'p&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'ui, 'p&gt; !UnwindSafe for InputInt2&lt;'ui, 'p&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'ui, 'p&gt; !UnwindSafe for InputInt3&lt;'ui, 'p&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'ui, 'p&gt; !UnwindSafe for InputInt4&lt;'ui, 'p&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'ui, 'p&gt; !UnwindSafe for InputText&lt;'ui, 'p&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'ui, 'p&gt; !UnwindSafe for InputTextMultiline&lt;'ui, 'p&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ConfigFlags","synthetic":true,"types":[]},{"text":"impl UnwindSafe for BackendFlags","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Io","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ImGuiDragDropFlags","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ImDrawCornerFlags","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ImDrawListFlags","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ImGuiInputTextFlags","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ImGuiTreeNodeFlags","synthetic":true,"types":[]},{"text":"impl&lt;'ui, 'p&gt; !UnwindSafe for PlotHistogram&lt;'ui, 'p&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'ui, 'p&gt; !UnwindSafe for PlotLines&lt;'ui, 'p&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'ui, 'p&gt; !UnwindSafe for PopupModal&lt;'ui, 'p&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DrawData","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for DrawListIterator&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DrawList","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for DrawCmdIterator&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DrawCmdParams","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DrawVert","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TextureId","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for Textures&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for FontStackToken","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for ColorStackToken","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for StyleStackToken","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for ItemWidthStackToken","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for TextWrapPosStackToken","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for ItemFlagsStackToken","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for IdStackToken","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ImString","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ImStr","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Style","synthetic":true,"types":[]},{"text":"impl&lt;'ui, 'p&gt; !UnwindSafe for CollapsingHeader&lt;'ui, 'p&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'ui, 'p&gt; !UnwindSafe for TreeNode&lt;'ui, 'p&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ItemHoveredFlags","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ColorEditFlags","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !UnwindSafe for ColorEdit&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !UnwindSafe for ColorPicker&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for ColorButton&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ComboBoxFlags","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for ComboBox&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for ComboBoxToken","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Image","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ImageButton","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for MenuItem&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for MainMenuBarToken","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for MenuBarToken","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for MenuToken","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for ProgressBar&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SelectableFlags","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for Selectable&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; UnwindSafe for Slider&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; UnwindSafe for VerticalSlider&lt;'a, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for AngleSlider&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for ChildWindow&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for ChildWindowToken","synthetic":true,"types":[]},{"text":"impl UnwindSafe for WindowHoveredFlags","synthetic":true,"types":[]},{"text":"impl UnwindSafe for WindowFocusedFlags","synthetic":true,"types":[]},{"text":"impl UnwindSafe for WindowFlags","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !UnwindSafe for Window&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for WindowToken","synthetic":true,"types":[]},{"text":"impl&lt;'ui&gt; !UnwindSafe for ChannelsSplit&lt;'ui&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ImColor","synthetic":true,"types":[]},{"text":"impl&lt;'ui&gt; !UnwindSafe for WindowDrawList&lt;'ui&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'ui&gt; !UnwindSafe for Ui&lt;'ui&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for FontSource&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !UnwindSafe for FontAtlasRef&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !UnwindSafe for FontAtlasRefMut&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Key","synthetic":true,"types":[]},{"text":"impl UnwindSafe for FocusedWidget","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MouseButton","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MouseCursor","synthetic":true,"types":[]},{"text":"impl UnwindSafe for NavInput","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DrawCmd","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ItemFlag","synthetic":true,"types":[]},{"text":"impl UnwindSafe for StyleColor","synthetic":true,"types":[]},{"text":"impl UnwindSafe for StyleVar","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !UnwindSafe for EditableColor&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ColorEditInputMode","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ColorEditDisplayMode","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ColorPickerMode","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ColorFormat","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ColorPreview","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ComboBoxHeight","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ComboBoxPreviewMode","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for Id&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Condition","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Direction","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for ImVector&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DataType","synthetic":true,"types":[]}];
implementors["imgui_sys"] = [{"text":"impl UnwindSafe for ImVec2_Simple","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ImVec4_Simple","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ImColor_Simple","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ImGuiContext","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ImDrawListSharedData","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ImVector_float","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ImVector_ImWchar","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ImVector_ImDrawVert","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ImVector_ImFontGlyph","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ImVector_ImGuiTextRange","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ImVector_ImGuiStoragePair","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ImVector_ImDrawChannel","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ImVector_char","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ImVector_ImU32","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ImVector_ImFontAtlasCustomRect","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ImVector_ImTextureID","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ImVector_ImFontConfig","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ImVector_ImFontPtr","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ImVector_ImDrawCmd","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ImVector_ImVec4","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ImVector_ImDrawIdx","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ImVector_ImVec2","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ImVec2","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ImVec4","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ImGuiStyle","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ImGuiIO","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ImGuiInputTextCallbackData","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ImGuiSizeCallbackData","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ImGuiPayload","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ImGuiOnceUponAFrame","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ImGuiTextFilter","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ImGuiTextBuffer","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ImGuiStorage","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ImGuiListClipper","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ImColor","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ImDrawCmd","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ImDrawVert","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ImDrawChannel","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ImDrawListSplitter","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ImDrawList","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ImDrawData","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ImFontConfig","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ImFontGlyph","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ImFontGlyphRangesBuilder","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ImFontAtlasCustomRect","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ImFontAtlas","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ImFont","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ImGuiTextRange","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ImGuiStoragePair","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ImGuiStoragePair__bindgen_ty_1","synthetic":true,"types":[]}];
implementors["parking_lot"] = [{"text":"impl UnwindSafe for Condvar","synthetic":true,"types":[]},{"text":"impl UnwindSafe for WaitTimeoutResult","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Once","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RawMutex","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RawRwLock","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RawThreadId","synthetic":true,"types":[]},{"text":"impl UnwindSafe for OnceState","synthetic":true,"types":[]}];
implementors["parking_lot_core"] = [{"text":"impl UnwindSafe for ParkToken","synthetic":true,"types":[]},{"text":"impl UnwindSafe for UnparkResult","synthetic":true,"types":[]},{"text":"impl UnwindSafe for UnparkToken","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SpinWait","synthetic":true,"types":[]},{"text":"impl UnwindSafe for FilterOp","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ParkResult","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RequeueOp","synthetic":true,"types":[]}];
implementors["proc_macro2"] = [{"text":"impl UnwindSafe for TokenStream","synthetic":true,"types":[]},{"text":"impl UnwindSafe for LexError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Span","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Group","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Punct","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Ident","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Literal","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TokenTree","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Delimiter","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Spacing","synthetic":true,"types":[]},{"text":"impl UnwindSafe for IntoIter","synthetic":true,"types":[]}];
implementors["smallvec"] = [{"text":"impl&lt;'a, T&gt; !UnwindSafe for Drain&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; UnwindSafe for SmallVec&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;A as Array&gt;::Item: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; UnwindSafe for IntoIter&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;A as Array&gt;::Item: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["syn"] = [{"text":"impl UnwindSafe for Attribute","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MetaList","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MetaNameValue","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Field","synthetic":true,"types":[]},{"text":"impl UnwindSafe for FieldsNamed","synthetic":true,"types":[]},{"text":"impl UnwindSafe for FieldsUnnamed","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Variant","synthetic":true,"types":[]},{"text":"impl UnwindSafe for VisCrate","synthetic":true,"types":[]},{"text":"impl UnwindSafe for VisPublic","synthetic":true,"types":[]},{"text":"impl UnwindSafe for VisRestricted","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ExprArray","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ExprAssign","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ExprAssignOp","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ExprAsync","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ExprAwait","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ExprBinary","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ExprBlock","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ExprBox","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ExprBreak","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ExprCall","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ExprCast","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ExprClosure","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ExprContinue","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ExprField","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ExprForLoop","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ExprGroup","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ExprIf","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ExprIndex","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ExprLet","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ExprLit","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ExprLoop","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ExprMacro","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ExprMatch","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ExprMethodCall","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ExprParen","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ExprPath","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ExprRange","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ExprReference","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ExprRepeat","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ExprReturn","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ExprStruct","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ExprTry","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ExprTryBlock","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ExprTuple","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ExprType","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ExprUnary","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ExprUnsafe","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ExprWhile","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ExprYield","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Index","synthetic":true,"types":[]},{"text":"impl UnwindSafe for BoundLifetimes","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ConstParam","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Generics","synthetic":true,"types":[]},{"text":"impl UnwindSafe for LifetimeDef","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PredicateEq","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PredicateLifetime","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PredicateType","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TraitBound","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TypeParam","synthetic":true,"types":[]},{"text":"impl UnwindSafe for WhereClause","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for ImplGenerics&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for Turbofish&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for TypeGenerics&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Lifetime","synthetic":true,"types":[]},{"text":"impl UnwindSafe for LitBool","synthetic":true,"types":[]},{"text":"impl UnwindSafe for LitByte","synthetic":true,"types":[]},{"text":"impl UnwindSafe for LitByteStr","synthetic":true,"types":[]},{"text":"impl UnwindSafe for LitChar","synthetic":true,"types":[]},{"text":"impl UnwindSafe for LitFloat","synthetic":true,"types":[]},{"text":"impl UnwindSafe for LitInt","synthetic":true,"types":[]},{"text":"impl UnwindSafe for LitStr","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Macro","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DataEnum","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DataStruct","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DataUnion","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DeriveInput","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Abi","synthetic":true,"types":[]},{"text":"impl UnwindSafe for BareFnArg","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TypeArray","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TypeBareFn","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TypeGroup","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TypeImplTrait","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TypeInfer","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TypeMacro","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TypeNever","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TypeParen","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TypePath","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TypePtr","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TypeReference","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TypeSlice","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TypeTraitObject","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TypeTuple","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Variadic","synthetic":true,"types":[]},{"text":"impl UnwindSafe for AngleBracketedGenericArguments","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Binding","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Constraint","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ParenthesizedGenericArguments","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Path","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PathSegment","synthetic":true,"types":[]},{"text":"impl UnwindSafe for QSelf","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl UnwindSafe for AttrStyle","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Meta","synthetic":true,"types":[]},{"text":"impl UnwindSafe for NestedMeta","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Fields","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Visibility","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Expr","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Member","synthetic":true,"types":[]},{"text":"impl UnwindSafe for GenericParam","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TraitBoundModifier","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TypeParamBound","synthetic":true,"types":[]},{"text":"impl UnwindSafe for WherePredicate","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Lit","synthetic":true,"types":[]},{"text":"impl UnwindSafe for StrStyle","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MacroDelimiter","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Data","synthetic":true,"types":[]},{"text":"impl UnwindSafe for BinOp","synthetic":true,"types":[]},{"text":"impl UnwindSafe for UnOp","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ReturnType","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Type","synthetic":true,"types":[]},{"text":"impl UnwindSafe for GenericArgument","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PathArguments","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Underscore","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Abstract","synthetic":true,"types":[]},{"text":"impl UnwindSafe for As","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Async","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Auto","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Await","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Become","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Box","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Break","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Const","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Continue","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Crate","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Default","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Do","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Dyn","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Else","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Enum","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Extern","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Final","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Fn","synthetic":true,"types":[]},{"text":"impl UnwindSafe for For","synthetic":true,"types":[]},{"text":"impl UnwindSafe for If","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Impl","synthetic":true,"types":[]},{"text":"impl UnwindSafe for In","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Let","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Loop","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Macro","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Match","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Mod","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Move","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Mut","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Override","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Priv","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Pub","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Ref","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Return","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SelfType","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SelfValue","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Static","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Struct","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Super","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Trait","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Try","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Type","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Typeof","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Union","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Unsafe","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Unsized","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Use","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Virtual","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Where","synthetic":true,"types":[]},{"text":"impl UnwindSafe for While","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Yield","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Add","synthetic":true,"types":[]},{"text":"impl UnwindSafe for AddEq","synthetic":true,"types":[]},{"text":"impl UnwindSafe for And","synthetic":true,"types":[]},{"text":"impl UnwindSafe for AndAnd","synthetic":true,"types":[]},{"text":"impl UnwindSafe for AndEq","synthetic":true,"types":[]},{"text":"impl UnwindSafe for At","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Bang","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Caret","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CaretEq","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Colon","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Colon2","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Comma","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Div","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DivEq","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Dollar","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Dot","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Dot2","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Dot3","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DotDotEq","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Eq","synthetic":true,"types":[]},{"text":"impl UnwindSafe for EqEq","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Ge","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Gt","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Le","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Lt","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MulEq","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Ne","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Or","synthetic":true,"types":[]},{"text":"impl UnwindSafe for OrEq","synthetic":true,"types":[]},{"text":"impl UnwindSafe for OrOr","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Pound","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Question","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RArrow","synthetic":true,"types":[]},{"text":"impl UnwindSafe for LArrow","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Rem","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RemEq","synthetic":true,"types":[]},{"text":"impl UnwindSafe for FatArrow","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Semi","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Shl","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ShlEq","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Shr","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ShrEq","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Star","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Sub","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SubEq","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Tilde","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Brace","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Bracket","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Paren","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Group","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TokenBuffer","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for Cursor&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T, P&gt; UnwindSafe for Punctuated&lt;T, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T, P&gt; UnwindSafe for Pairs&lt;'a, T, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T, P&gt; !UnwindSafe for PairsMut&lt;'a, T, P&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T, P&gt; UnwindSafe for IntoPairs&lt;T, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: RefUnwindSafe + UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe + UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for IntoIter&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: RefUnwindSafe + UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; !UnwindSafe for Iter&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, T&gt; !UnwindSafe for IterMut&lt;'a, T&gt;","synthetic":true,"types":[]},{"text":"impl&lt;T, P&gt; UnwindSafe for Pair&lt;T, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for Lookahead1&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !UnwindSafe for ParseBuffer&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'c, 'a&gt; UnwindSafe for StepCursor&lt;'c, 'a&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Nothing","synthetic":true,"types":[]}];
implementors["synstructure"] = [{"text":"impl&lt;'a&gt; UnwindSafe for BindingInfo&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for VariantAst&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for VariantInfo&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for Structure&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for AddBounds","synthetic":true,"types":[]},{"text":"impl UnwindSafe for BindStyle","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()