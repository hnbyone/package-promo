/* @ds-bundle: {"format":3,"namespace":"EDesignSystem_fae528","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Badge","sourcePath":"components/data/Badge.jsx"},{"name":"Tag","sourcePath":"components/data/Tag.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"ProductCard","sourcePath":"components/surfaces/ProductCard.jsx"}],"sourceHashes":{"components/core/Button.jsx":"32e9cf4b462e","components/data/Badge.jsx":"ef8f0d49ded8","components/data/Tag.jsx":"669552a915bf","components/forms/Input.jsx":"776968725187","components/forms/Radio.jsx":"ddeecd0dd779","components/forms/Select.jsx":"72974d616673","components/navigation/Pagination.jsx":"c48b63a6665b","components/navigation/Tabs.jsx":"76ffaebd3c22","components/surfaces/Card.jsx":"3eaf992c8a2d","components/surfaces/ProductCard.jsx":"82360468ddaf","ui_kits/store/Catalog.jsx":"f2f4b214f258","ui_kits/store/Chrome.jsx":"52961fdddf8f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.EDesignSystem_fae528 = window.EDesignSystem_fae528 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * 단꿈e Button — 3 variants (dark / orange / outline) × 3 sizes.
 * Orange is the main CTA. Dark is secondary emphasis. Outline is a soft action.
 */
function Button({
  variant = "orange",
  size = "md",
  disabled = false,
  fullWidth = false,
  leftIcon = null,
  rightIcon = null,
  children,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const sizes = {
    sm: {
      fontSize: "var(--text-sm)",
      padding: "8px 16px",
      height: 36
    },
    md: {
      fontSize: "var(--text-md)",
      padding: "12px 24px",
      height: 48
    },
    lg: {
      fontSize: "var(--text-lg)",
      padding: "14px 28px",
      height: 56
    }
  };
  const palette = {
    orange: {
      base: {
        background: "var(--orange-500)",
        color: "var(--gray-white)",
        border: "1.5px solid transparent"
      },
      hover: {
        background: "var(--orange-600)"
      },
      disabled: {
        background: "var(--orange-300)",
        color: "var(--gray-white)"
      }
    },
    dark: {
      base: {
        background: "var(--gray-700)",
        color: "var(--gray-white)",
        border: "1.5px solid transparent"
      },
      hover: {
        background: "var(--gray-600)"
      },
      disabled: {
        background: "var(--gray-200)",
        color: "var(--gray-400)"
      }
    },
    outline: {
      base: {
        background: "var(--gray-white)",
        color: "var(--gray-700)",
        border: "1.5px solid var(--gray-300)"
      },
      hover: {
        background: "var(--orange-100)",
        color: "var(--orange-600)",
        border: "1.5px solid var(--orange-500)"
      },
      disabled: {
        background: "var(--gray-white)",
        color: "var(--gray-300)",
        border: "1.5px solid var(--gray-200)"
      }
    }
  };
  const p = palette[variant] || palette.orange;
  const s = sizes[size] || sizes.md;
  const styleObj = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    width: fullWidth ? "100%" : "auto",
    minHeight: s.height,
    padding: s.padding,
    fontFamily: "var(--font-sans)",
    fontSize: s.fontSize,
    fontWeight: "var(--weight-bold)",
    lineHeight: 1,
    borderRadius: "var(--radius-xs)",
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "background .15s ease, color .15s ease, border-color .15s ease, transform .08s ease",
    transform: active && !disabled ? "scale(0.98)" : "scale(1)",
    whiteSpace: "nowrap",
    ...p.base,
    ...(disabled ? p.disabled : hover ? p.hover : null),
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled,
    style: styleObj,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false)
  }, rest), leftIcon, children, rightIcon);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/data/Badge.jsx
try { (() => {
/**
 * 단꿈e Badge — emphasis pill (BEST / HOT / NEW). Solid orange by default.
 */
function Badge({
  tone = "orange",
  pill = true,
  children,
  style = {}
}) {
  const tones = {
    orange: {
      bg: "var(--orange-500)",
      fg: "var(--gray-white)"
    },
    dark: {
      bg: "var(--gray-700)",
      fg: "var(--gray-white)"
    },
    success: {
      bg: "var(--green-400)",
      fg: "var(--gray-white)"
    },
    error: {
      bg: "var(--alert-red)",
      fg: "var(--gray-white)"
    }
  };
  const t = tones[tone] || tones.orange;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      padding: "4px 12px",
      borderRadius: pill ? "var(--radius-xl)" : "var(--radius-xs)",
      background: t.bg,
      color: t.fg,
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-xs)",
      fontWeight: "var(--weight-bold)",
      lineHeight: 1.4,
      letterSpacing: "0.02em",
      whiteSpace: "nowrap",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data/Tag.jsx
try { (() => {
/**
 * 단꿈e Tag — subject/grade label using a secondary color family (100 bg + 500 text).
 * Use `color` to pick the family. radius-xs, text-xs bold.
 */
function Tag({
  color = "green",
  children,
  style = {}
}) {
  const families = {
    yellow: {
      bg: "var(--yellow-100)",
      fg: "var(--yellow-500)"
    },
    purple: {
      bg: "var(--purple-100)",
      fg: "var(--purple-500)"
    },
    green: {
      bg: "var(--green-100)",
      fg: "var(--green-500)"
    },
    blue: {
      bg: "var(--blue-100)",
      fg: "var(--blue-500)"
    },
    teal: {
      bg: "var(--teal-100)",
      fg: "var(--teal-500)"
    },
    pink: {
      bg: "var(--pink-100)",
      fg: "var(--pink-500)"
    },
    gray: {
      bg: "var(--gray-100)",
      fg: "var(--gray-500)"
    },
    orange: {
      bg: "var(--orange-100)",
      fg: "var(--orange-600)"
    }
  };
  const c = families[color] || families.green;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      padding: "4px 10px",
      borderRadius: "var(--radius-xs)",
      background: c.bg,
      color: c.fg,
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-xs)",
      fontWeight: "var(--weight-bold)",
      lineHeight: 1.4,
      whiteSpace: "nowrap",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * 단꿈e text input. 48px height, orange focus ring, error state with helper text.
 */
function Input({
  label,
  required = false,
  error = "",
  helper = "",
  disabled = false,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const hasError = Boolean(error);
  const borderColor = hasError ? "var(--alert-red)" : focus ? "var(--orange-500)" : "var(--gray-300)";
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      fontFamily: "var(--font-sans)"
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-medium)",
      color: "var(--text-strong)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--orange-500)",
      marginLeft: 2
    }
  }, "*")), /*#__PURE__*/React.createElement("input", _extends({
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      height: 48,
      padding: "0 16px",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-md)",
      color: "var(--text-strong)",
      background: disabled ? "var(--gray-50)" : "var(--gray-white)",
      border: `${focus || hasError ? "1.5px" : "1px"} solid ${borderColor}`,
      borderRadius: "var(--radius-xs)",
      outline: "none",
      boxShadow: focus && !hasError ? "var(--focus-ring)" : "none",
      transition: "border-color .15s ease, box-shadow .15s ease",
      ...style
    }
  }, rest)), (error || helper) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      color: hasError ? "var(--alert-red)" : "var(--text-muted)"
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
/**
 * 단꿈e radio button. Selected = 4px orange ring; unselected = 1.5px gray; disabled = gray on light bg.
 */
function Radio({
  checked = false,
  disabled = false,
  label,
  name,
  value,
  onChange,
  style = {}
}) {
  const ring = disabled ? "1.5px solid var(--gray-200)" : checked ? "4px solid var(--orange-500)" : "1.5px solid var(--gray-300)";
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      cursor: disabled ? "not-allowed" : "pointer",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-md)",
      color: disabled ? "var(--text-disabled)" : "var(--text-strong)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e),
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: "var(--radius-xl)",
      background: disabled ? "var(--gray-50)" : "var(--gray-white)",
      border: ring,
      boxSizing: "border-box",
      flex: "none",
      transition: "border .15s ease"
    }
  }), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
/**
 * 단꿈e select / dropdown. Orange border on hover & open, orange-tinted option hover.
 */
function Select({
  label,
  required = false,
  placeholder = "선택하세요",
  options = [],
  value = "",
  onChange,
  disabled = false,
  style = {}
}) {
  const [open, setOpen] = React.useState(false);
  const [hover, setHover] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    function onDoc(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);
  const selected = options.find(o => (typeof o === "string" ? o : o.value) === value);
  const selectedLabel = selected ? typeof selected === "string" ? selected : selected.label : "";
  const active = open || hover;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      fontFamily: "var(--font-sans)"
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-medium)",
      color: "var(--text-strong)"
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--orange-500)",
      marginLeft: 2
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      position: "relative",
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: disabled,
    onClick: () => setOpen(o => !o),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: "100%",
      height: 48,
      padding: "0 16px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 8,
      background: disabled ? "var(--gray-50)" : "var(--gray-white)",
      border: `${active ? "1.5px" : "1px"} solid ${active ? "var(--orange-500)" : "var(--gray-300)"}`,
      borderRadius: "var(--radius-xs)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-md)",
      color: selectedLabel ? "var(--text-strong)" : "var(--text-disabled)",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "border-color .15s ease"
    }
  }, /*#__PURE__*/React.createElement("span", null, selectedLabel || placeholder), /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    style: {
      transform: open ? "rotate(180deg)" : "none",
      transition: "transform .15s ease"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 7.5L10 12.5L15 7.5",
    stroke: "var(--gray-500)",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), open && /*#__PURE__*/React.createElement("ul", {
    style: {
      position: "absolute",
      top: "calc(100% + 4px)",
      left: 0,
      right: 0,
      zIndex: 20,
      margin: 0,
      padding: 4,
      listStyle: "none",
      background: "var(--gray-white)",
      border: "1px solid var(--gray-200)",
      borderRadius: "var(--radius-xs)",
      boxShadow: "var(--shadow-xl)",
      maxHeight: 240,
      overflowY: "auto"
    }
  }, options.map(o => {
    const v = typeof o === "string" ? o : o.value;
    const l = typeof o === "string" ? o : o.label;
    const isSel = v === value;
    return /*#__PURE__*/React.createElement(OptionRow, {
      key: v,
      selected: isSel,
      label: l,
      onClick: () => {
        onChange && onChange(v);
        setOpen(false);
      }
    });
  }))));
}
function OptionRow({
  label,
  selected,
  onClick
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("li", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      padding: "10px 12px",
      borderRadius: 6,
      cursor: "pointer",
      fontSize: "var(--text-md)",
      background: h ? "var(--orange-100)" : "transparent",
      color: selected ? "var(--orange-600)" : "var(--text-strong)",
      fontWeight: selected ? "var(--weight-bold)" : "var(--weight-regular)"
    }
  }, label);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
/**
 * 단꿈e Pagination — current page orange filled; others gray text; arrows gray.
 */
function Pagination({
  page = 1,
  totalPages = 1,
  onChange,
  style = {}
}) {
  const go = p => {
    if (p >= 1 && p <= totalPages && onChange) onChange(p);
  };
  const pages = pageList(page, totalPages);
  const cell = {
    minWidth: 36,
    height: 36,
    padding: "0 8px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "var(--radius-xs)",
    border: "none",
    background: "none",
    fontFamily: "var(--font-sans)",
    fontSize: "var(--text-sm)",
    cursor: "pointer"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 4,
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: {
      ...cell,
      color: "var(--gray-300)"
    },
    onClick: () => go(page - 1)
  }, "\u2039"), pages.map((p, i) => p === "…" ? /*#__PURE__*/React.createElement("span", {
    key: `e${i}`,
    style: {
      ...cell,
      color: "var(--gray-300)",
      cursor: "default"
    }
  }, "\xB7\xB7\xB7") : /*#__PURE__*/React.createElement("button", {
    key: p,
    type: "button",
    onClick: () => go(p),
    style: {
      ...cell,
      background: p === page ? "var(--orange-500)" : "transparent",
      color: p === page ? "var(--gray-white)" : "var(--text-muted)",
      fontWeight: p === page ? "var(--weight-bold)" : "var(--weight-regular)"
    }
  }, p)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: {
      ...cell,
      color: "var(--gray-300)"
    },
    onClick: () => go(page + 1)
  }, "\u203A"));
}
function pageList(page, total) {
  if (total <= 7) return Array.from({
    length: total
  }, (_, i) => i + 1);
  const out = [1];
  const start = Math.max(2, page - 1);
  const end = Math.min(total - 1, page + 1);
  if (start > 2) out.push("…");
  for (let i = start; i <= end; i++) out.push(i);
  if (end < total - 1) out.push("…");
  out.push(total);
  return out;
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/**
 * 단꿈e Tabs — active tab is orange bold with a 2px orange underline indicator.
 */
function Tabs({
  tabs = [],
  value,
  onChange,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 24,
      borderBottom: "1px solid var(--gray-200)",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, tabs.map(t => {
    const v = typeof t === "string" ? t : t.value;
    const l = typeof t === "string" ? t : t.label;
    const active = v === value;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      type: "button",
      onClick: () => onChange && onChange(v),
      style: {
        position: "relative",
        padding: "12px 2px",
        background: "none",
        border: "none",
        cursor: "pointer",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-md)",
        fontWeight: active ? "var(--weight-bold)" : "var(--weight-regular)",
        color: active ? "var(--orange-500)" : "var(--text-muted)",
        transition: "color .15s ease"
      }
    }, l, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: -1,
        height: 2,
        background: active ? "var(--orange-500)" : "transparent",
        borderRadius: 2
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * 단꿈e Card — white surface, radius-sm. `emphasis` adds a 1.5px orange border
 * (BEST / 추천 / 신규구매). `elevation` maps to the shadow scale.
 */
function Card({
  emphasis = false,
  elevation = "sm",
  padding = "16px 20px",
  children,
  style = {},
  ...rest
}) {
  const shadows = {
    none: "none",
    sm: "var(--shadow-sm)",
    md: "var(--shadow-md)",
    lg: "var(--shadow-lg)"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--gray-white)",
      border: emphasis ? "1.5px solid var(--orange-500)" : "0.5px solid var(--gray-200)",
      borderRadius: "var(--radius-sm)",
      boxShadow: shadows[elevation] || shadows.sm,
      padding,
      fontFamily: "var(--font-sans)",
      color: "var(--text-strong)",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/ProductCard.jsx
try { (() => {
/**
 * 단꿈e product card — thumbnail, badge, subject tag, title, discount + price, struck original price.
 */
function ProductCard({
  thumbnail,
  thumbnailColor = "var(--orange-100)",
  badge,
  tag,
  tagColor = "green",
  title = "",
  discount,
  price = "",
  originalPrice,
  emphasis = false,
  onClick,
  style = {}
}) {
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    emphasis: emphasis,
    elevation: "md",
    padding: "0",
    style: {
      overflow: "hidden",
      cursor: onClick ? "pointer" : "default",
      width: 260,
      ...style
    },
    onClick: onClick
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 150,
      background: thumbnailColor,
      borderRadius: "var(--radius-sm) var(--radius-sm) 0 0",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, thumbnail ? /*#__PURE__*/React.createElement("img", {
    src: thumbnail,
    alt: title,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : null, badge && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 12,
      left: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, null, badge))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "16px 20px",
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, tag && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    color: tagColor
  }, tag)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-md)",
      fontWeight: "var(--weight-bold)",
      color: "var(--text-strong)",
      lineHeight: "var(--leading-md)"
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 8,
      marginTop: 4
    }
  }, discount && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-lg)",
      fontWeight: "var(--weight-extrabold)",
      color: "var(--orange-500)"
    }
  }, discount), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-lg)",
      fontWeight: "var(--weight-extrabold)",
      color: "var(--text-strong)"
    }
  }, price)), originalPrice && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--gray-400)",
      textDecoration: "line-through"
    }
  }, originalPrice)));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/ProductCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/store/Catalog.jsx
try { (() => {
/* global React */
// 단꿈e store — course catalog grid + product detail screen.

const COURSES = [{
  id: 1,
  title: "설민석 초등 한국사 전집",
  tag: "한국사",
  tagColor: "yellow",
  teacher: "설민석",
  badge: "BEST",
  discount: "10%",
  price: "972,000원",
  original: "1,080,000원",
  thumb: "var(--yellow-100)",
  emphasis: true
}, {
  id: 2,
  title: "초등 수학 마스터 1년 과정",
  tag: "수학",
  tagColor: "blue",
  teacher: "김수학",
  badge: "HOT",
  discount: "15%",
  price: "510,000원",
  original: "600,000원",
  thumb: "var(--blue-100)"
}, {
  id: 3,
  title: "재미로 배우는 초등 국어",
  tag: "국어",
  tagColor: "green",
  teacher: "이국어",
  discount: "",
  price: "390,000원",
  original: "",
  thumb: "var(--green-100)"
}, {
  id: 4,
  title: "초등 영어 회화 첫걸음",
  tag: "영어",
  tagColor: "purple",
  teacher: "박영어",
  badge: "신규",
  discount: "20%",
  price: "352,000원",
  original: "440,000원",
  thumb: "var(--purple-100)"
}, {
  id: 5,
  title: "호기심 초등 과학 실험실",
  tag: "과학",
  tagColor: "teal",
  teacher: "최과학",
  discount: "",
  price: "420,000원",
  original: "",
  thumb: "var(--teal-100)"
}, {
  id: 6,
  title: "초등 사회 개념 완성",
  tag: "사회",
  tagColor: "pink",
  teacher: "정사회",
  discount: "10%",
  price: "360,000원",
  original: "400,000원",
  thumb: "var(--pink-100)"
}];
function CourseList({
  onOpen
}) {
  const {
    Tabs,
    ProductCard,
    Pagination
  } = window.EDesignSystem_fae528;
  const [tab, setTab] = React.useState("전체");
  const [page, setPage] = React.useState(1);
  const shown = tab === "전체" ? COURSES : COURSES.filter(c => c.tag === tab);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: "0 auto",
      padding: "48px 24px"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 32,
      fontWeight: 700,
      color: "var(--gray-700)",
      margin: "0 0 8px"
    }
  }, "\uC804\uCCB4 \uAC15\uC88C"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      color: "var(--gray-500)",
      margin: "0 0 28px"
    }
  }, "\uC2A4\uD0C0 \uC120\uC0DD\uB2D8\uC774 \uC9C1\uC811 \uC124\uACC4\uD55C \uB2E8\uAFC8e \uB300\uD45C \uAC15\uC88C"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: ["전체", "국어", "수학", "영어", "과학", "사회", "한국사"],
    value: tab,
    onChange: setTab
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(248px, 1fr))",
      gap: 24
    }
  }, shown.map(c => /*#__PURE__*/React.createElement(ProductCard, {
    key: c.id,
    emphasis: c.emphasis,
    badge: c.badge,
    tag: c.tag,
    tagColor: c.tagColor,
    thumbnailColor: c.thumb,
    title: c.title,
    discount: c.discount,
    price: c.price,
    originalPrice: c.original,
    style: {
      width: "100%"
    },
    onClick: () => onOpen(c)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Pagination, {
    page: page,
    totalPages: 8,
    onChange: setPage
  })));
}
function CourseDetail({
  course,
  onBack,
  onEnroll
}) {
  const {
    Button,
    Badge,
    Tag,
    Card,
    Radio
  } = window.EDesignSystem_fae528;
  const c = course || COURSES[0];
  const [plan, setPlan] = React.useState("12");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: "0 auto",
      padding: "32px 24px 24px"
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: onBack,
    style: {
      fontSize: 14,
      color: "var(--gray-500)",
      cursor: "pointer"
    }
  }, "\u2039 \uAC15\uC88C \uBAA9\uB85D"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.2fr 0.8fr",
      gap: 32,
      marginTop: 16,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 320,
      borderRadius: "var(--radius-md)",
      background: c.thumb,
      border: "0.5px solid var(--gray-200)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 48,
      fontWeight: 800,
      color: "var(--gray-400)",
      opacity: 0.6
    }
  }, "\uAC15\uC758 \uBBF8\uB9AC\uBCF4\uAE30")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8,
      margin: "20px 0 12px"
    }
  }, /*#__PURE__*/React.createElement(Tag, {
    color: c.tagColor
  }, c.tag), c.badge && /*#__PURE__*/React.createElement(Badge, null, c.badge)), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 32,
      fontWeight: 700,
      color: "var(--gray-700)",
      margin: "0 0 8px"
    }
  }, c.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      color: "var(--gray-500)"
    }
  }, c.teacher, " \uC120\uC0DD\uB2D8 \xB7 \uCD08\uB4F1 \uC804\uD559\uB144 \xB7 \uCD1D 48\uAC15")), /*#__PURE__*/React.createElement(Card, {
    emphasis: true,
    elevation: "lg",
    padding: "24px",
    style: {
      position: "sticky",
      top: 88
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 8
    }
  }, c.discount && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 24,
      fontWeight: 800,
      color: "var(--orange-500)"
    }
  }, c.discount), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 24,
      fontWeight: 800,
      color: "var(--gray-700)"
    }
  }, c.price)), c.original && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--gray-400)",
      textDecoration: "line-through",
      marginTop: 4
    }
  }, c.original), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "var(--gray-100)",
      margin: "20px 0"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: "var(--gray-700)",
      marginBottom: 12
    }
  }, "\uC218\uAC15 \uAE30\uAC04 \uC120\uD0DD"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 12,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(Radio, {
    name: "plan",
    label: "12\uAC1C\uC6D4 (\uAD8C\uC7A5)",
    checked: plan === "12",
    onChange: () => setPlan("12")
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "plan",
    label: "6\uAC1C\uC6D4",
    checked: plan === "6",
    onChange: () => setPlan("6")
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "orange",
    fullWidth: true,
    size: "lg",
    onClick: onEnroll
  }, "\uC218\uAC15 \uC2E0\uCCAD\uD558\uAE30"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    fullWidth: true
  }, "\uC7A5\uBC14\uAD6C\uB2C8 \uB2F4\uAE30"))));
}
Object.assign(window, {
  CourseList,
  CourseDetail,
  COURSES
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/store/Catalog.jsx", error: String((e && e.message) || e) }); }

// ui_kits/store/Chrome.jsx
try { (() => {
/* global React */
// 단꿈e store — shared chrome (header + footer) and the star-teacher hero.

function Header({
  onNav,
  active
}) {
  const {
    Button
  } = window.EDesignSystem_fae528;
  const items = ["전체강좌", "스타 선생님", "초등", "중등", "이벤트"];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 30,
      background: "rgba(255,255,255,0.92)",
      backdropFilter: "blur(8px)",
      borderBottom: "1px solid var(--gray-200)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: "0 auto",
      padding: "0 24px",
      height: 72,
      display: "flex",
      alignItems: "center",
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav("home"),
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: 2,
      cursor: "pointer",
      textDecoration: "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 26,
      fontWeight: 800,
      color: "var(--gray-700)",
      letterSpacing: "-0.02em"
    }
  }, "\uB2E8\uAFC8"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 26,
      fontWeight: 800,
      color: "var(--orange-500)",
      letterSpacing: "-0.02em"
    }
  }, "e")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      gap: 28,
      flex: 1
    }
  }, items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it,
    onClick: () => onNav("list"),
    style: {
      fontSize: 16,
      fontWeight: it === "스타 선생님" ? 700 : 500,
      color: it === "스타 선생님" ? "var(--orange-500)" : "var(--gray-600)",
      cursor: "pointer"
    }
  }, it))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("a", {
    style: {
      fontSize: 14,
      color: "var(--gray-500)",
      cursor: "pointer"
    }
  }, "\uB85C\uADF8\uC778"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "orange",
    onClick: () => onNav("list")
  }, "\uC218\uAC15\uC2E0\uCCAD"))));
}
function Hero({
  onNav
}) {
  const {
    Button,
    Badge
  } = window.EDesignSystem_fae528;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: "linear-gradient(180deg, var(--orange-50), var(--background-beige))"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: "0 auto",
      padding: "72px 24px",
      display: "grid",
      gridTemplateColumns: "1.1fr 0.9fr",
      gap: 40,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "orange"
  }, "\uCD08\uB4F1\uACF5\uBD80 \uC2E0\uC758 \uD55C \uC218"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 52,
      lineHeight: "66px",
      fontWeight: 800,
      letterSpacing: "-0.02em",
      color: "var(--gray-700)",
      margin: "16px 0 12px"
    }
  }, "\uB300\uD55C\uBBFC\uAD6D \uCD5C\uACE0 \uC2A4\uD0C0 \uC120\uC0DD\uB2D8\uACFC", /*#__PURE__*/React.createElement("br", null), "\uD568\uAED8\uD558\uB294 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--orange-500)"
    }
  }, "\uCD08\uB4F1 \uAD50\uC721")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: "26px",
      color: "var(--gray-500)",
      fontWeight: 500,
      margin: "0 0 28px",
      maxWidth: 460
    }
  }, "\uAC80\uC99D\uB41C \uB77C\uC778\uC5C5, \uC790\uAE30\uC8FC\uB3C4 \uD559\uC2B5 \uC2B5\uAD00, \uADF8\uB9AC\uACE0 \uC7AC\uBBF8\uAE4C\uC9C0. \uB2E8\uAFC8e\uC5D0\uC11C \uC2DC\uC791\uD558\uC138\uC694."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "orange",
    onClick: () => onNav("list")
  }, "\uAC15\uC88C \uB458\uB7EC\uBCF4\uAE30"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "outline"
  }, "\uBB34\uB8CC \uCCB4\uD5D8")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 32,
      marginTop: 36
    }
  }, [["120+", "스타 선생님"], ["98%", "학습 완주율"], ["35만", "함께한 학생"]].map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      fontWeight: 800,
      color: "var(--gray-700)"
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--gray-500)"
    }
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 360,
      borderRadius: "var(--radius-lg)",
      background: "var(--orange-100)",
      border: "1.5px solid var(--orange-200)",
      boxShadow: "var(--shadow-color-bottom)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 64,
      fontWeight: 800,
      color: "var(--orange-400)",
      lineHeight: 1
    }
  }, "\uAFC8e"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--orange-600)",
      marginTop: 12,
      fontWeight: 600
    }
  }, "\uB300\uD45C \uAC15\uC0AC \uC774\uBBF8\uC9C0 \uC601\uC5ED")))));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--gray-700)",
      color: "var(--gray-300)",
      marginTop: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: "0 auto",
      padding: "40px 24px",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 22,
      fontWeight: 800,
      color: "#fff"
    }
  }, "\uB2E8\uAFC8", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--orange-400)"
    }
  }, "e")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 13,
      color: "var(--gray-400)",
      marginTop: 8,
      maxWidth: 320
    }
  }, "\uCD08\uB4F1\uACF5\uBD80 \uC2E0\uC758 \uD55C \uC218. \uC2A4\uD0C0 \uC120\uC0DD\uB2D8\uACFC \uD568\uAED8\uD558\uB294 \uC790\uAE30\uC8FC\uB3C4 \uD559\uC2B5.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 48,
      fontSize: 13
    }
  }, [["서비스", ["전체강좌", "스타 선생님", "이벤트"]], ["고객지원", ["공지사항", "자주 묻는 질문", "1:1 문의"]]].map(([h, ls]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#fff",
      fontWeight: 700,
      marginBottom: 10
    }
  }, h), ls.map(l => /*#__PURE__*/React.createElement("div", {
    key: l,
    style: {
      marginBottom: 6,
      color: "var(--gray-400)"
    }
  }, l)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--gray-600)",
      padding: "16px 24px",
      fontSize: 12,
      color: "var(--gray-500)",
      textAlign: "center"
    }
  }, "\xA9 2024 \uB2E8\uAFC8e \xB7 UUWORKS"));
}
Object.assign(window, {
  Header,
  Hero,
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/store/Chrome.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ProductCard = __ds_scope.ProductCard;

})();
