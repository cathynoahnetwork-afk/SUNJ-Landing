/* @ds-bundle: {"format":4,"namespace":"YiGDesignSystem_b36419","components":[{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Title","sourcePath":"components/core/Title.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"}],"sourceHashes":{"components/core/Button.jsx":"de6ce7b9381e","components/core/Card.jsx":"3618334d92ee","components/core/Logo.jsx":"71e56d13cf52","components/core/Tag.jsx":"19114308aaac","components/core/Title.jsx":"8f5dbb122e42","components/forms/Checkbox.jsx":"f396c39a9319","components/forms/Input.jsx":"9ca6d838e2c9","components/forms/Switch.jsx":"4378bd52fb53"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.YiGDesignSystem_b36419 = window.YiGDesignSystem_b36419 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Button.jsx
try { (() => {
const SIZES = {
  sm: {
    h: 36,
    px: 16,
    fs: 14
  },
  md: {
    h: 44,
    px: 24,
    fs: 16
  },
  lg: {
    h: 56,
    px: 32,
    fs: 18
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  fullWidth = false,
  children,
  onClick,
  type = 'button',
  style
}) {
  const [hover, setHover] = React.useState(false);
  const [press, setPress] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const V = {
    primary: {
      bg: 'var(--yig-green)',
      bgH: 'var(--yig-green-800)',
      fg: '#fff',
      bd: 'var(--yig-green)'
    },
    highlight: {
      bg: 'var(--yig-yellow)',
      bgH: 'var(--yig-yellow-600)',
      fg: 'var(--yig-green-800)',
      bd: 'var(--yig-yellow)'
    },
    alert: {
      bg: 'var(--yig-red)',
      bgH: 'var(--yig-red-700)',
      fg: '#fff',
      bd: 'var(--yig-red)'
    },
    outline: {
      bg: 'transparent',
      bgH: 'var(--yig-emerald-50)',
      fg: 'var(--yig-green)',
      bd: 'var(--yig-green)'
    },
    inverse: {
      bg: '#fff',
      bgH: 'var(--yig-emerald-100)',
      fg: 'var(--yig-green)',
      bd: '#fff'
    }
  }[variant] || {};
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      height: s.h,
      padding: '0 ' + s.px + 'px',
      fontFamily: 'var(--font-body)',
      fontSize: s.fs,
      fontWeight: 700,
      letterSpacing: '0.04em',
      background: hover && !disabled ? V.bgH : V.bg,
      color: V.fg,
      border: '2px solid ' + V.bd,
      borderRadius: 'var(--radius-sm)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      transform: press && !disabled ? 'translateY(1px)' : 'none',
      transition: 'background var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function Card({
  tone = 'white',
  padding = 32,
  media,
  title,
  children,
  footer,
  style
}) {
  const T = {
    white: {
      bg: '#fff',
      fg: 'var(--text-body)',
      bd: '1px solid var(--border-default)',
      tc: 'var(--yig-green)'
    },
    green: {
      bg: 'var(--yig-green)',
      fg: '#fff',
      bd: 'none',
      tc: '#fff'
    },
    gradient: {
      bg: 'var(--yig-gradient-soft)',
      fg: 'var(--text-body)',
      bd: 'none',
      tc: 'var(--yig-green)'
    },
    muted: {
      bg: 'var(--surface-muted)',
      fg: 'var(--text-body)',
      bd: 'none',
      tc: 'var(--yig-green)'
    }
  }[tone];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: T.bg,
      color: T.fg,
      border: T.bd,
      borderRadius: 'var(--radius-sm)',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, media, /*#__PURE__*/React.createElement("div", {
    style: {
      padding,
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--fs-h3)',
      lineHeight: 'var(--lh-tight)',
      color: T.tc,
      transform: 'skewX(var(--title-skew))',
      transformOrigin: 'left bottom',
      alignSelf: 'flex-start'
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-body)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, footer)));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function Logo({
  variant = 'onDark',
  src,
  height = 56,
  style
}) {
  const def = variant === 'onLight' ? 'assets/yig-logo-badge.png' : 'assets/yig-logo.png';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src || def,
    alt: "\u4F9D\u683C YiG",
    style: {
      height,
      display: 'block'
    }
  }));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function Tag({
  tone = 'green',
  children,
  style
}) {
  const T = {
    green: ['var(--yig-green)', '#fff'],
    yellow: ['var(--yig-yellow)', 'var(--yig-green-800)'],
    red: ['var(--yig-red)', '#fff'],
    soft: ['var(--yig-emerald-100)', 'var(--yig-green)'],
    white: ['#fff', 'var(--yig-green)']
  }[tone] || ['var(--yig-green)', '#fff'];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: 26,
      padding: '0 10px',
      background: T[0],
      color: T[1],
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '0.04em',
      borderRadius: 'var(--radius-sm)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/core/Title.jsx
try { (() => {
const SZ = {
  hero: 'var(--fs-hero)',
  h1: 'var(--fs-h1)',
  h2: 'var(--fs-h2)',
  h3: 'var(--fs-h3)',
  h4: 'var(--fs-h4)'
};
const C = {
  green: 'var(--yig-green)',
  white: '#fff',
  yellow: 'var(--yig-yellow)',
  red: 'var(--yig-red)',
  ink: 'var(--yig-ink)'
};
function Title({
  level = 'h1',
  color = 'green',
  skew = 12,
  as,
  children,
  style
}) {
  const Tag = as || (level === 'hero' ? 'h1' : level);
  return /*#__PURE__*/React.createElement(Tag, {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: SZ[level] || SZ.h1,
      lineHeight: 'var(--lh-tight)',
      letterSpacing: 'var(--ls-title)',
      color: C[color] || color,
      display: 'inline-block',
      transform: 'skewX(-' + skew + 'deg)',
      transformOrigin: 'left bottom',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Title });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Title.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  defaultChecked = false,
  onChange,
  disabled = false
}) {
  const [inner, setInner] = React.useState(defaultChecked);
  const on = checked ?? inner;
  const toggle = () => {
    if (disabled) return;
    setInner(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("span", {
    onClick: toggle,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: '50%',
      border: '2px solid var(--yig-green)',
      background: on ? 'var(--yig-green)' : '#fff',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontSize: 13,
      fontWeight: 900,
      lineHeight: 1
    }
  }, on ? '✓' : ''), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  value,
  defaultValue,
  onChange,
  type = 'text',
  error,
  disabled = false,
  style
}) {
  const [f, setF] = React.useState(false);
  const bd = error ? 'var(--yig-red)' : f ? 'var(--yig-green)' : 'var(--yig-emerald-200)';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      paddingLeft: 20,
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    onChange: onChange,
    disabled: disabled,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      height: 48,
      padding: '0 20px',
      fontSize: 16,
      fontFamily: 'inherit',
      color: 'var(--text-body)',
      background: disabled ? 'var(--yig-gray-100)' : 'var(--yig-emerald-50)',
      border: '2px solid ' + bd,
      borderRadius: 'var(--radius-pill)',
      outline: 'none',
      transition: 'border-color var(--dur-fast)'
    }
  }), error && /*#__PURE__*/React.createElement("span", {
    style: {
      paddingLeft: 20,
      fontSize: 13,
      color: 'var(--yig-red)'
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  checked,
  defaultChecked = false,
  onChange,
  disabled = false
}) {
  const [inner, setInner] = React.useState(defaultChecked);
  const on = checked ?? inner;
  const toggle = () => {
    if (disabled) return;
    setInner(!on);
    onChange && onChange(!on);
  };
  return /*#__PURE__*/React.createElement("span", {
    onClick: toggle,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 24,
      borderRadius: 'var(--radius-pill)',
      background: on ? 'var(--yig-green)' : 'var(--yig-gray-200)',
      position: 'relative',
      transition: 'background var(--dur-base)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: on ? 23 : 3,
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: on ? 'var(--yig-yellow)' : '#fff',
      transition: 'left var(--dur-base) var(--ease-out)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Title = __ds_scope.Title;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Switch = __ds_scope.Switch;

})();
