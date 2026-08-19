/* @ds-bundle: {"format":4,"namespace":"CertificDesignSystem_f41272","components":[],"sourceHashes":{"ui_kits/prm_app/app.jsx":"930e90714cdc","ui_kits/prm_app/components.jsx":"5ffccb8d4c8c","ui_kits/prm_app/icons.jsx":"875e6e6f9532","ui_kits/prm_app/screens.jsx":"5e27f76d48b9"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.CertificDesignSystem_f41272 = window.CertificDesignSystem_f41272 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/prm_app/app.jsx
try { (() => {
/* global React, ReactDOM, AppShell, SideMenu, DashboardScreen, AdminScreen, AnalyticsScreen, NewEContactModal, QueryDetailScreen */
const {
  useState
} = React;
function App() {
  const [page, setPage] = useState('dashboard'); // dashboard | admin | analytics | detail
  const [menu, setMenu] = useState(false);
  const [modal, setModal] = useState(null);
  let body;
  if (page === 'detail') body = /*#__PURE__*/React.createElement(QueryDetailScreen, {
    onBack: () => setPage('dashboard')
  });else if (page === 'admin') body = /*#__PURE__*/React.createElement(AdminScreen, null);else if (page === 'analytics') body = /*#__PURE__*/React.createElement(AnalyticsScreen, null);else body = /*#__PURE__*/React.createElement(DashboardScreen, {
    onOpenRow: () => setPage('detail')
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(AppShell, {
    onOpenMenu: () => setMenu(true)
  }, body), /*#__PURE__*/React.createElement("div", {
    className: "kit-nav"
  }, [['dashboard', 'Dashboard'], ['detail', 'Query detail'], ['admin', 'Administration'], ['analytics', 'Analytics']].map(([k, l]) => /*#__PURE__*/React.createElement("button", {
    key: k,
    className: page === k ? 'on' : '',
    onClick: () => setPage(k)
  }, l)), /*#__PURE__*/React.createElement("button", {
    onClick: () => setModal('new')
  }, "+ New e-contact modal")), /*#__PURE__*/React.createElement(SideMenu, {
    open: menu,
    onClose: () => setMenu(false)
  }), /*#__PURE__*/React.createElement(NewEContactModal, {
    show: modal === 'new',
    onClose: () => setModal(null)
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/prm_app/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/prm_app/components.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* global React, Icon, ProblemTagColors */
const {
  useState,
  useEffect
} = React;

// ---------- Button (matches ButtonComponent.vue variants) ----------
function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  block,
  children,
  onClick,
  type = 'button',
  ...rest
}) {
  const cls = `btn btn--${variant} btn--${size}` + (block ? ' btn--block' : '');
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    className: cls,
    onClick: onClick
  }, rest), icon ? React.createElement(Icon[icon], {
    size: 16
  }) : null, children ? /*#__PURE__*/React.createElement("span", null, children) : null, iconRight ? React.createElement(Icon[iconRight], {
    size: 16
  }) : null);
}

// ---------- ProblemTag (coloured pill) ----------
function ProblemTag({
  type,
  label,
  cell
}) {
  const key = (type || '').toLowerCase().replace(/[ -]/g, '_');
  const palette = ProblemTagColors[key] || ProblemTagColors.other;
  return /*#__PURE__*/React.createElement("span", {
    className: `ptag${cell ? ' ptag--cell' : ''}`,
    style: {
      backgroundColor: palette.bg,
      color: palette.fg
    }
  }, label || type);
}

// ---------- FilterChip (the pill-shaped dropdowns in the screenshots) ----------
function FilterChip({
  label,
  active,
  count,
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    className: `fchip${active ? ' fchip--active' : ''}`,
    onClick: onClick
  }, /*#__PURE__*/React.createElement("span", null, label), count ? /*#__PURE__*/React.createElement("span", {
    className: "fchip__count"
  }, count) : null, React.createElement(Icon.chevronDown, {
    size: 14
  }));
}

// ---------- RadioToggle pair (GP center / Patient, Active / Finished) ----------
function TogglePair({
  icon,
  optionA,
  optionB,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "toggle-pair"
  }, icon ? /*#__PURE__*/React.createElement("span", {
    className: "toggle-pair__icon"
  }, React.createElement(Icon[icon], {
    size: 16,
    color: '#3D15E0'
  })) : null, /*#__PURE__*/React.createElement("button", {
    className: value === 'a' ? 'on' : '',
    onClick: () => onChange('a')
  }, optionA), /*#__PURE__*/React.createElement("button", {
    className: value === 'b' ? 'on' : '',
    onClick: () => onChange('b')
  }, optionB));
}

// ---------- Avatar ----------
function Avatar({
  name,
  size = 32,
  color
}) {
  const initials = (name || '?').split(' ').map(s => s[0]).slice(0, 2).join('').toUpperCase();
  const bg = color || '#E0DAFA';
  const fg = color ? '#fff' : '#3D15E0';
  return /*#__PURE__*/React.createElement("span", {
    className: "avatar",
    style: {
      width: size,
      height: size,
      background: bg,
      color: fg,
      fontSize: Math.round(size * 0.38)
    }
  }, initials);
}

// ---------- ProgressStepper (the 3-dot stepper from send-message modal) ----------
function ProgressStepper({
  steps,
  current
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "stepper"
  }, steps.map((s, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: `stepper__step ${i === current ? 'is-current' : i < current ? 'is-done' : ''}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), /*#__PURE__*/React.createElement("span", {
    className: "lbl"
  }, s)), i < steps.length - 1 ? /*#__PURE__*/React.createElement("span", {
    className: "stepper__line"
  }) : null)));
}

// ---------- StatusDot (patient-is-waiting indicator) ----------
function StatusDot({
  tone = 'waiting',
  children
}) {
  const palette = {
    waiting: {
      bg: '#F24E29'
    },
    ok: {
      bg: '#22967F'
    },
    muted: {
      bg: '#999'
    }
  }[tone];
  return /*#__PURE__*/React.createElement("span", {
    className: "sdot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sdot__dot",
    style: {
      background: palette.bg
    }
  }), children);
}

// ---------- RRR stat card (from Communication tab) ----------
function RRRStat({
  label,
  value
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "rrr"
  }, /*#__PURE__*/React.createElement("span", {
    className: "rrr__tag"
  }, "RRR"), /*#__PURE__*/React.createElement("span", {
    className: "rrr__value"
  }, value), /*#__PURE__*/React.createElement("span", {
    className: "rrr__label"
  }, label));
}

// ---------- CalloutRow (green-dot info row from consultation detail) ----------
function CalloutRow({
  children,
  tone = 'info'
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `callout callout--${tone}`
  }, /*#__PURE__*/React.createElement("span", {
    className: "callout__mark"
  }, React.createElement(tone === 'info' ? Icon.info : Icon.check, {
    size: 14,
    color: '#fff'
  })), /*#__PURE__*/React.createElement("div", null, children));
}

// ---------- Chip (info row with label + copy) ----------
function InfoChip({
  icon,
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "ichip"
  }, icon ? React.createElement(Icon[icon], {
    size: 14,
    color: '#666'
  }) : null, /*#__PURE__*/React.createElement("span", null, children), /*#__PURE__*/React.createElement("button", {
    className: "ichip__copy",
    "aria-label": "Copy"
  }, React.createElement(Icon.copy, {
    size: 14
  })));
}

// ---------- Tabs ----------
function Tabs({
  items,
  value,
  onChange,
  dense
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: `tabs${dense ? ' tabs--dense' : ''}`,
    role: "tablist"
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.id,
    role: "tab",
    "aria-selected": value === it.id,
    className: value === it.id ? 'active' : '',
    onClick: () => onChange(it.id)
  }, it.label, it.dot ? /*#__PURE__*/React.createElement("span", {
    className: "tab-dot"
  }) : null)));
}

// ---------- FAB (floating compose button) ----------
function ComposeFAB({
  onClick
}) {
  return /*#__PURE__*/React.createElement("button", {
    className: "fab",
    "aria-label": "New query",
    onClick: onClick
  }, React.createElement(Icon.edit, {
    size: 20,
    color: '#fff'
  }));
}

// ---------- Modal (backdrop blur) ----------
function Modal({
  show,
  onClose,
  wide,
  children
}) {
  useEffect(() => {
    if (!show) return;
    const onKey = e => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [show, onClose]);
  if (!show) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "modal-backdrop",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: `modal${wide ? ' modal--wide' : ''}`,
    onClick: e => e.stopPropagation()
  }, children));
}

// ---------- Toggle switch (iOS-style, real brand toggle) ----------
function Toggle({
  checked,
  onChange,
  label,
  id
}) {
  const htmlId = id || `t${Math.random().toString(36).slice(2, 8)}`;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlId,
    className: "toggle"
  }, /*#__PURE__*/React.createElement("input", {
    id: htmlId,
    type: "checkbox",
    checked: checked,
    onChange: e => onChange(e.target.checked)
  }), /*#__PURE__*/React.createElement("span", {
    className: "toggle__track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "toggle__thumb"
  })), label ? /*#__PURE__*/React.createElement("span", {
    className: "toggle__label"
  }, label) : null);
}

// ---------- Collapsed sidebar (just hamburger, matching screenshots) ----------
function CollapsedSidebar({
  onOpen
}) {
  return /*#__PURE__*/React.createElement("button", {
    className: "sb-collapsed",
    "aria-label": "Open menu",
    onClick: onOpen
  }, React.createElement(Icon.menu, {
    size: 22
  }));
}
Object.assign(window, {
  Button,
  ProblemTag,
  FilterChip,
  TogglePair,
  Avatar,
  ProgressStepper,
  StatusDot,
  RRRStat,
  CalloutRow,
  InfoChip,
  Tabs,
  ComposeFAB,
  Modal,
  Toggle,
  CollapsedSidebar
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/prm_app/components.jsx", error: String((e && e.message) || e) }); }

// ui_kits/prm_app/icons.jsx
try { (() => {
/* global React */
// Lucide-style icons + problem-type tag palette derived from clinician screenshots
const {
  createElement: h
} = React;
const makeIcon = (paths, {
  viewBox = "0 0 24 24",
  fill = "none"
} = {}) => ({
  size = 20,
  color,
  strokeWidth = 2,
  ...rest
}) => h("svg", {
  width: size,
  height: size,
  viewBox,
  fill,
  stroke: color || "currentColor",
  strokeWidth,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  ...rest
}, paths.map((d, i) => h("path", {
  key: i,
  d
})));
const Icon = {
  menu: makeIcon(["M3 6h18", "M3 12h18", "M3 18h18"]),
  chevronDown: makeIcon(["M6 9l6 6 6-6"]),
  chevronRight: makeIcon(["M9 18l6-6-6-6"]),
  chevronLeft: makeIcon(["M15 18l-6-6 6-6"]),
  arrowLeft: makeIcon(["M19 12H5", "M12 19l-7-7 7-7"]),
  arrowRight: makeIcon(["M5 12h14", "M12 5l7 7-7 7"]),
  close: makeIcon(["M18 6L6 18", "M6 6l12 12"]),
  search: makeIcon(["M11 19a8 8 0 100-16 8 8 0 000 16z", "M21 21l-4.35-4.35"]),
  filter: makeIcon(["M22 3H2l8 9.46V19l4 2v-8.54L22 3z"]),
  gpCenter: makeIcon(["M12 22a10 10 0 100-20 10 10 0 000 20z", "M2 12h20", "M12 2a15 15 0 010 20", "M12 2a15 15 0 000 20"]),
  lock: makeIcon(["M5 11h14a2 2 0 012 2v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7a2 2 0 012-2z", "M7 11V7a5 5 0 0110 0v4"]),
  copy: makeIcon(["M20 9h-9a2 2 0 00-2 2v9a2 2 0 002 2h9a2 2 0 002-2v-9a2 2 0 00-2-2z", "M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"]),
  mail: makeIcon(["M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z", "M22 6l-10 7L2 6"]),
  phone: makeIcon(["M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"]),
  idcard: makeIcon(["M3 4h18a2 2 0 012 2v12a2 2 0 01-2 2H3a2 2 0 01-2-2V6a2 2 0 012-2z", "M7 11h2", "M7 15h6", "M15 7h2", "M15 11h2", "M15 15h2"]),
  info: makeIcon(["M12 22a10 10 0 100-20 10 10 0 000 20z", "M12 16v-4", "M12 8h.01"]),
  check: makeIcon(["M20 6L9 17l-5-5"]),
  checkCircle: makeIcon(["M22 11.08V12a10 10 0 11-5.93-9.14", "M22 4L12 14.01l-3-3"]),
  alert: makeIcon(["M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z", "M12 9v4", "M12 17h.01"]),
  closeBox: makeIcon(["M3 3h18v18H3z", "M9 9l6 6", "M15 9l-6 6"]),
  paperclip: makeIcon(["M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"]),
  send: makeIcon(["M22 2L11 13", "M22 2l-7 20-4-9-9-4 20-7z"]),
  download: makeIcon(["M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4", "M7 10l5 5 5-5", "M12 15V3"]),
  edit: makeIcon(["M12 20h9", "M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4 12.5-12.5z"]),
  plus: makeIcon(["M12 5v14", "M5 12h14"]),
  help: makeIcon(["M12 22a10 10 0 100-20 10 10 0 000 20z", "M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3", "M12 17h.01"]),
  replies: makeIcon(["M3 12h18", "M3 6h18", "M3 18h12"]),
  notesDot: makeIcon(["M12 22a10 10 0 100-20 10 10 0 000 20z"], {
    fill: "#F24E29"
  }),
  pdf: makeIcon(["M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z", "M14 2v6h6", "M9 13h2a2 2 0 010 4H9v-4z", "M14 13h3", "M14 17h2", "M15 13v4"]),
  image: makeIcon(["M3 3h18v18H3z", "M8.5 13a2 2 0 100-4 2 2 0 000 4z", "M21 15l-5-5L5 21"]),
  chevronUp: makeIcon(["M18 15l-6-6-6 6"]),
  building: makeIcon(["M3 21h18", "M5 21V7l7-4 7 4v14", "M9 9h2", "M13 9h2", "M9 13h2", "M13 13h2", "M9 17h2", "M13 17h2"]),
  phoneSolid: makeIcon(["M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"]),
  pencilEdit: makeIcon(["M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7", "M18.5 2.5a2.12 2.12 0 013 3L12 15l-4 1 1-4 9.5-9.5z"]),
  logout: makeIcon(["M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4", "M16 17l5-5-5-5", "M21 12H9"]),
  switchView: makeIcon(["M7 10l-4 4 4 4", "M3 14h12a6 6 0 006-6", "M17 14l4-4-4-4"]),
  chart: makeIcon(["M3 3v18h18", "M7 14l3-3 4 4 5-5"]),
  chartPie: makeIcon(["M21.21 15.89A10 10 0 118 2.83", "M22 12A10 10 0 0012 2v10z"]),
  people: makeIcon(["M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2", "M9 11a4 4 0 100-8 4 4 0 000 8z", "M23 21v-2a4 4 0 00-3-3.87", "M16 3.13a4 4 0 010 7.75"]),
  singleUser: makeIcon(["M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2", "M12 11a4 4 0 100-8 4 4 0 000 8z"]),
  clock: makeIcon(["M12 22a10 10 0 100-20 10 10 0 000 20z", "M12 6v6l4 2"]),
  smsFolder: makeIcon(["M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2v11z"]),
  wrench: makeIcon(["M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"]),
  infoHub: makeIcon(["M12 22a10 10 0 100-20 10 10 0 000 20z", "M12 16v-4", "M12 8h.01"]),
  certificLogo: makeIcon(["M12 2a10 10 0 100 20", "M17 8h.01"]),
  thumbGood: makeIcon(["M7 10v12", "M15 5.88L14 10h5.83a2 2 0 011.92 2.56l-2.33 8A2 2 0 0117.5 22H7V10l5-8a2 2 0 012 2v1.88z"]),
  workload: makeIcon(["M3 3h18v18H3z", "M8 12h8", "M8 8h8", "M8 16h5"]),
  stethoscope: makeIcon(["M8 2v4a3 3 0 006 0V2", "M6 14a5 5 0 0010 0V9", "M18 14a2 2 0 100-4 2 2 0 000 4z"]),
  pill: makeIcon(["M10.5 20.5a7.78 7.78 0 11-11-11l11 11z", "M8.5 8.5l12-12a5.66 5.66 0 018 8l-12 12"]),
  envelopeAt: makeIcon(["M22 12a10 10 0 11-5.93-9.14", "M18 8l-6 6-3-3", "M18 12v4a2 2 0 002 2"]),
  bulletDot: makeIcon(["M12 14a2 2 0 100-4 2 2 0 000 4z"], {
    fill: "#B1A1F3"
  })
};

// ---------------------------------------------------------------------------
// Reason-of-contact tag palette — sampled from live product screenshots.
//
// Structural rules that come WITH this palette (see .ptag in index.html):
//   * On the Dashboard table the tag is FIXED WIDTH (fills its column) with
//     CENTERED text — it is not a hug-content chip. This is what gives the
//     dashboard its distinctive "colour column" rhythm.
//   * Everywhere else (detail header, patient e-contact card) the same colours
//     render as a normal hug-content pill.
//   * Text is always near-black #17172B — never white, never a tinted dark.
//     Every bg below clears 4.5:1 against it.
//   * Saturation is mid-pastel, NOT the washed 5% tints of a generic SaaS.
// ---------------------------------------------------------------------------
const ProblemTagColors = {
  // purples / violets
  cough: {
    bg: "#C9A9E9",
    fg: "#17172B"
  },
  anxiety_purple: {
    bg: "#C9A9E9",
    fg: "#17172B"
  },
  procedures: {
    bg: "#C5A8E5",
    fg: "#17172B"
  },
  // periwinkle / blues
  back_pain: {
    bg: "#AAB9F6",
    fg: "#17172B"
  },
  neck_pain: {
    bg: "#AFBCF6",
    fg: "#17172B"
  },
  knee_pain: {
    bg: "#BDCAF3",
    fg: "#17172B"
  },
  ankle_pain: {
    bg: "#C5D3F7",
    fg: "#17172B"
  },
  joint_pain: {
    bg: "#BDCAF3",
    fg: "#17172B"
  },
  joints: {
    bg: "#BDCAF3",
    fg: "#17172B"
  },
  // greens / teals / aquas
  headache: {
    bg: "#8ECBBA",
    fg: "#17172B"
  },
  painful_urination: {
    bg: "#90E9B2",
    fg: "#17172B"
  },
  labs: {
    bg: "#A9F1DD",
    fg: "#17172B"
  },
  diarrhea: {
    bg: "#C0E97C",
    fg: "#17172B"
  },
  common_cold: {
    bg: "#8ECBBA",
    fg: "#17172B"
  },
  certificate: {
    bg: "#A9F1DD",
    fg: "#17172B"
  },
  vertigo: {
    bg: "#B8DFBC",
    fg: "#17172B"
  },
  fn_end: {
    bg: "#8ECBBA",
    fg: "#17172B"
  },
  // yellows / sands
  prescription_refill: {
    bg: "#F6ED9F",
    fg: "#17172B"
  },
  prescription: {
    bg: "#F6ED9F",
    fg: "#17172B"
  },
  abdominal_pain: {
    bg: "#F6E0A1",
    fg: "#17172B"
  },
  stomach_ache: {
    bg: "#F6E0A1",
    fg: "#17172B"
  },
  // peaches / oranges
  sore_throat: {
    bg: "#F6B394",
    fg: "#17172B"
  },
  skin_rash: {
    bg: "#F9D0A9",
    fg: "#17172B"
  },
  dermatological: {
    bg: "#F9D0A9",
    fg: "#17172B"
  },
  // pinks
  anxiety: {
    bg: "#FBD2E1",
    fg: "#17172B"
  },
  depression: {
    bg: "#F6D6EC",
    fg: "#17172B"
  },
  // neutrals — reserved for non-clinical / administrative reasons
  ankle_injury: {
    bg: "#D7DBDF",
    fg: "#17172B"
  },
  follow_up: {
    bg: "#DDE1E5",
    fg: "#17172B"
  },
  appointment: {
    bg: "#DDE1E5",
    fg: "#17172B"
  },
  other: {
    bg: "#D6DCE1",
    fg: "#17172B"
  }
};
window.Icon = Icon;
window.ProblemTagColors = ProblemTagColors;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/prm_app/icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/prm_app/screens.jsx
try { (() => {
/* global React, Icon, ProblemTagColors, Button, ProblemTag, FilterChip, TogglePair,
   ProgressStepper, RRRStat, CalloutRow, InfoChip, Tabs, ComposeFAB, Modal, Toggle,
   StatusDot, CollapsedSidebar, Avatar */
const {
  useState: useS
} = React;

// Queries table rows — taken from the real clinician Queries screen (English demo tenant)
// Each row mirrors the reference screenshot: relative-time `sent`, pastel problem-type tag,
// patient name, first sentence of AI-summarised content, and either an assigned clinician or
// an Unassigned button. The 4th row uses owner: 'picker' \u2014 popover visible in the reference.
const QUERY_ROWS = [{
  sent: '6 h 54 min ago',
  type: 'common_cold',
  tagLabel: 'Common cold',
  patient: 'Mary Pearl',
  msg: 'The patient reports falling ill on 14 Sept 2022 with the following symptoms: fever over 37.5\u00B0C, general malaise\u2026',
  owner: {
    name: 'Julia Johnson',
    color: '#FBE2B8'
  }
}, {
  sent: '7 h 21 min ago',
  type: 'prescription',
  tagLabel: 'Prescription',
  patient: 'William Atwood',
  msg: 'Requests a prescription for Escitalopram 10 mg.',
  owner: {
    name: 'Andreas Laser',
    color: '#D7D5F0'
  }
}, {
  sent: '8 h 7 min ago',
  type: 'vertigo',
  tagLabel: 'Vertigo',
  patient: 'Gabriel Smith',
  msg: 'The patient reports experiencing symptoms of vertigo over the years. Dizziness is triggered by changes in head and body\u2026',
  owner: null
}, {
  sent: '8 h 41 min ago',
  type: 'stomach_ache',
  tagLabel: 'Stomach ache',
  patient: 'Liza Brown',
  msg: 'The patient reports episodic abdominal pain since 12 Sept 2022. The pain is dull, localized more to the lower-left part of the\u2026',
  owner: 'picker'
}, {
  sent: '13.09.2022',
  type: 'vertigo',
  tagLabel: 'Vertigo',
  patient: 'Olivia Williams',
  msg: 'The patient reports experiencing symptoms of vertigo over the years. Dizziness is triggered by changes in head and body\u2026',
  owner: null
}, {
  sent: '13.09.2022',
  type: 'certificate',
  tagLabel: 'Certificate',
  patient: 'Cassandra Lane',
  msg: 'Requests the issuance of a food handler\u2019s health certificate. The patient asks: \u201CDo I have to undergo an X-ray before receiving\u2026',
  owner: null
}, {
  sent: '13.09.2022',
  type: 'prescription',
  tagLabel: 'Prescription',
  patient: 'Eva Perenson',
  msg: 'Requests a prescription for Metoprolol 50 mg, Amlodipine 5 mg, Ramipril 2.5 mg.',
  owner: null
}, {
  sent: '13.09.2022',
  type: 'vertigo',
  tagLabel: 'Vertigo',
  patient: 'Roberta Atwood',
  msg: 'The patient reports experiencing symptoms of vertigo over the years. Dizziness is triggered by changes in head and body\u2026',
  owner: null
}, {
  sent: '12.09.2022',
  type: 'other',
  tagLabel: 'Other',
  patient: 'Rasmus Johnson',
  msg: 'The patient seeks advice about another problem: I have had a hard lump on my back for a long time, the surgeon once thought\u2026',
  owner: null
}, {
  sent: '12.09.2022',
  type: 'joint_pain',
  tagLabel: 'Joint pain',
  patient: 'Henry Johnson',
  msg: 'The patient\u2019s wrist mobility has worsened, occasional hip joint pain. The patient has been seeing a rheumatologist for a year\u2026',
  owner: {
    name: 'Julia Johnson',
    color: '#FBE2B8'
  }
}, {
  sent: '12.09.2022',
  type: 'stomach_ache',
  tagLabel: 'Stomach ache',
  patient: 'Sandra Sherwood',
  msg: 'The patient reports episodic abdominal pain since 12 Sept 2022. The pain is dull, localized more to the lower-left part of the\u2026',
  owner: null
}, {
  sent: '12.09.2022',
  type: 'prescription',
  tagLabel: 'Prescription',
  patient: 'Olivia Williams',
  msg: 'Requests a prescription for Escitalopram 10 mg.',
  owner: {
    name: 'Andreas Laser',
    color: '#D7D5F0'
  }
}, {
  sent: '11.09.2022',
  type: 'headache',
  tagLabel: 'Headache',
  patient: 'Charlotte Hence',
  msg: 'The patient reports frequent sharp temple headaches. Headaches occur periodically, mostly disappear after 4 days.',
  owner: {
    name: 'Julia Johnson',
    color: '#FBE2B8'
  }
}, {
  sent: '11.09.2022',
  type: 'back_pain',
  tagLabel: 'Back pain',
  patient: 'Laura Atkins',
  msg: 'The patient has severe lower back pain, the pain intensifies when walking. The pain radiates to the right leg and the pain\u2026',
  owner: {
    name: 'Julia Johnson',
    color: '#FBE2B8'
  }
}];

// ---------- AppShell ----------
function AppShell({
  children,
  onOpenMenu,
  clinicName = 'Certified Clinic'
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "shell"
  }, /*#__PURE__*/React.createElement("header", {
    className: "top"
  }, /*#__PURE__*/React.createElement("button", {
    className: "iconbtn",
    "aria-label": "Menu",
    onClick: onOpenMenu
  }, React.createElement(Icon.menu, {
    size: 18
  }), /*#__PURE__*/React.createElement("span", null, "Menu")), /*#__PURE__*/React.createElement("div", {
    className: "top__right"
  }, /*#__PURE__*/React.createElement("button", {
    className: "clinicsel",
    "aria-label": `Switch clinic — current: ${clinicName}`
  }, React.createElement(Icon.building, {
    size: 14,
    'aria-hidden': true
  }), " ", /*#__PURE__*/React.createElement("span", null, clinicName), " ", React.createElement(Icon.chevronDown, {
    size: 12,
    'aria-hidden': true
  })), /*#__PURE__*/React.createElement("button", {
    className: "langsel",
    "aria-label": "Change language"
  }, "EN ", React.createElement(Icon.chevronDown, {
    size: 12,
    'aria-hidden': true
  })))), /*#__PURE__*/React.createElement("main", null, children));
}

// ---------- Slide-out menu ----------
function SideMenu({
  open,
  onClose,
  active = 'DASHBOARD'
}) {
  const items = [['DASHBOARD', 'chart'], ['INFORMATION HUB', 'infoHub'], ['SMS CENTRE', 'smsFolder'], ['TOOLS', 'wrench'], ['ADMINISTRATION', 'people'], ['ANALYTICS', 'chartPie'], ['PLATFORM INFO', 'certificLogo'], ['PRM ADMIN', 'certificLogo']];
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "sidedrawer",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("aside", {
    className: "sidedrawer__panel",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    className: "sidedrawer__close",
    onClick: onClose,
    "aria-label": "Close"
  }, React.createElement(Icon.close, {
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    className: "sidedrawer__user"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sidedrawer__avatar"
  }, "DW"), /*#__PURE__*/React.createElement("div", {
    className: "sidedrawer__name"
  }, "Doctor Who"), /*#__PURE__*/React.createElement("button", {
    className: "sidedrawer__editlink"
  }, React.createElement(Icon.pencilEdit, {
    size: 12
  }), " Update profile")), /*#__PURE__*/React.createElement("nav", {
    className: "sidedrawer__nav"
  }, items.map(([label, icon]) => /*#__PURE__*/React.createElement("button", {
    key: label,
    className: `sidedrawer__item${active === label ? ' is-active' : ''}`
  }, React.createElement(Icon[icon], {
    size: 18
  }), /*#__PURE__*/React.createElement("span", null, label)))), /*#__PURE__*/React.createElement("div", {
    className: "sidedrawer__foot"
  }, /*#__PURE__*/React.createElement("button", {
    className: "sidedrawer__item"
  }, React.createElement(Icon.switchView, {
    size: 18
  }), " ", /*#__PURE__*/React.createElement("span", null, "Patient's view")), /*#__PURE__*/React.createElement("button", {
    className: "sidedrawer__item"
  }, React.createElement(Icon.logout, {
    size: 18
  }), " ", /*#__PURE__*/React.createElement("span", null, "Log out")))));
}

// ---------- Dashboard page (the clinician's main task queue) ----------
// Tabs shown under the page title \u2014 matches the real clinician Dashboard.
// Counts in parentheses are only shown for tabs that carry them in the reference.
const DASH_TABS = [{
  id: 'awaiting',
  label: 'Awaiting clinic reply',
  count: 11
}, {
  id: 'unassigned',
  label: 'Unassigned'
}, {
  id: 'me',
  label: 'Assigned to me'
}, {
  id: 'patient',
  label: 'Awaiting patient reply'
}, {
  id: 'completed',
  label: 'Completed'
}, {
  id: 'all',
  label: 'All'
}];
function DashboardScreen({
  onOpenRow,
  onNewContact
}) {
  const [tab, setTab] = useS('awaiting');
  const [ownerPickerIdx, setOwnerPickerIdx] = useS(null);
  return /*#__PURE__*/React.createElement("div", {
    className: "main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "page-head"
  }, /*#__PURE__*/React.createElement("h1", null, "Dashboard")), /*#__PURE__*/React.createElement("div", {
    className: "seg-tabs",
    role: "tablist",
    "aria-label": "Query status"
  }, DASH_TABS.map(t => /*#__PURE__*/React.createElement("button", {
    key: t.id,
    role: "tab",
    "aria-selected": tab === t.id,
    className: tab === t.id ? 'on' : '',
    onClick: () => setTab(t.id)
  }, t.label, t.count != null ? ` (${t.count})` : ''))), /*#__PURE__*/React.createElement("div", {
    className: "dash-filters"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dfrow"
  }, /*#__PURE__*/React.createElement(FilterChip, {
    label: "Time period"
  }), /*#__PURE__*/React.createElement(FilterChip, {
    label: "Assigned person"
  }), /*#__PURE__*/React.createElement(FilterChip, {
    label: "Patient panel"
  }), /*#__PURE__*/React.createElement(FilterChip, {
    label: "Reason of contact"
  }), /*#__PURE__*/React.createElement("div", {
    className: "searchpill",
    style: {
      minWidth: 240
    }
  }, React.createElement(Icon.search, {
    size: 14,
    'aria-hidden': true
  }), /*#__PURE__*/React.createElement("label", {
    htmlFor: "dash-search",
    className: "sr-only"
  }, "Search patient"), /*#__PURE__*/React.createElement("input", {
    id: "dash-search",
    placeholder: "Search patient"
  })), /*#__PURE__*/React.createElement("button", {
    className: "iconbtn-dots",
    "aria-label": "More filters"
  }, '\u22EE'), /*#__PURE__*/React.createElement("div", {
    className: "spacer"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    icon: "pencilEdit",
    onClick: onNewContact
  }, "New e-contact"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "phoneSolid"
  }, "New e-contact as patient"))), /*#__PURE__*/React.createElement("div", {
    className: "qtable"
  }, /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
    style: {
      width: 150
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "fhdr"
  }, React.createElement(Icon.filter, {
    size: 12
  }), " Last update")), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 170
    }
  }, "Reason of contact"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 170
    }
  }, "Patient"), /*#__PURE__*/React.createElement("th", null, "Message preview"), /*#__PURE__*/React.createElement("th", {
    style: {
      width: 210,
      textAlign: 'left'
    }
  }, "Assigned person"))), /*#__PURE__*/React.createElement("tbody", null, QUERY_ROWS.map((q, i) => {
    const openRow = () => onOpenRow && onOpenRow(q);
    return /*#__PURE__*/React.createElement("tr", {
      key: i,
      tabIndex: 0,
      role: "button",
      "aria-label": `Open query from ${q.patient}, ${q.tagLabel}`,
      onClick: openRow,
      onKeyDown: e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openRow();
        }
      }
    }, /*#__PURE__*/React.createElement("td", {
      className: "sent-cell"
    }, q.sent), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(ProblemTag, {
      cell: true,
      type: q.type,
      label: q.tagLabel
    })), /*#__PURE__*/React.createElement("td", {
      className: "patient-cell"
    }, q.patient), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("span", {
      className: "content-text"
    }, q.msg)), /*#__PURE__*/React.createElement("td", null, q.owner === 'picker' ? /*#__PURE__*/React.createElement("div", {
      className: "pos-rel"
    }, /*#__PURE__*/React.createElement("button", {
      className: "owner owner--unassigned",
      onClick: e => {
        e.stopPropagation();
        setOwnerPickerIdx(ownerPickerIdx === i ? null : i);
      }
    }, /*#__PURE__*/React.createElement("span", null, "Select person"), React.createElement(Icon.chevronDown, {
      size: 12
    })), ownerPickerIdx === i && /*#__PURE__*/React.createElement("div", {
      className: "popover",
      style: {
        right: 0,
        left: 'auto',
        minWidth: 200
      },
      onClick: e => e.stopPropagation()
    }, /*#__PURE__*/React.createElement("div", {
      className: "qsearchpill",
      style: {
        margin: '0 0 6px'
      }
    }, React.createElement(Icon.search, {
      size: 12,
      color: 'var(--brand)'
    }), /*#__PURE__*/React.createElement("input", {
      placeholder: "Search name",
      style: {
        fontSize: 13
      }
    })), OWNER_PICKER_NAMES.map(n => /*#__PURE__*/React.createElement("label", {
      key: n,
      className: "row"
    }, n)))) : q.owner ? /*#__PURE__*/React.createElement("span", {
      className: "owner"
    }, /*#__PURE__*/React.createElement("span", {
      className: "av",
      style: {
        background: q.owner.color
      }
    }, q.owner.name.split(' ').map(s => s[0]).slice(0, 2).join('')), /*#__PURE__*/React.createElement("span", null, q.owner.name)) : /*#__PURE__*/React.createElement("button", {
      className: "owner owner--unassigned"
    }, /*#__PURE__*/React.createElement("span", null, "Select person"), React.createElement(Icon.chevronDown, {
      size: 12
    }))));
  })))));
}

// ---------- Administration page ----------
function AdminScreen() {
  const rows = [['download', 'PATIENT LIST ADMINISTRATION'], ['singleUser', 'EMPLOYEE ADMINISTRATION'], ['replies', 'SET GLOBAL MESSAGE'], ['envelopeAt', 'CONTACT INFORMATION OF THE CLINIC'], ['building', "CLINIC'S SETTINGS"], ['replies', 'TEMPLATE ANSWERS MANAGEMENT']];
  return /*#__PURE__*/React.createElement("div", {
    className: "main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "page-head"
  }, /*#__PURE__*/React.createElement("h1", null, "Administration")), /*#__PURE__*/React.createElement("div", {
    className: "admin-list"
  }, rows.map(([icon, label]) => /*#__PURE__*/React.createElement("button", {
    key: label,
    className: "admin-row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "admin-row__icon"
  }, React.createElement(Icon[icon], {
    size: 16
  })), /*#__PURE__*/React.createElement("span", {
    className: "admin-row__label"
  }, label), React.createElement(Icon.chevronRight, {
    size: 14
  })))));
}

// ---------- Analytics page ----------
function AnalyticsScreen() {
  const [sub, setSub] = useS('general');
  const subs = [{
    id: 'general',
    label: 'General',
    icon: 'chart'
  }, {
    id: 'feedback',
    label: 'Feedback',
    icon: 'thumbGood'
  }, {
    id: 'workload',
    label: 'Workload',
    icon: 'workload'
  }, {
    id: 'response',
    label: 'Response Times',
    icon: 'clock'
  }];
  const stats = [['Total patients', 24], ['Total staff', 6], ['Patient lists', 1], ['Patients with e-contacts in period', 2], ['E-contacts in period', 41]];
  return /*#__PURE__*/React.createElement("div", {
    className: "main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "page-head"
  }, /*#__PURE__*/React.createElement("h1", null, "Analytics"), /*#__PURE__*/React.createElement("div", {
    className: "subseg"
  }, subs.map(s => /*#__PURE__*/React.createElement("button", {
    key: s.id,
    className: sub === s.id ? 'on' : '',
    onClick: () => setSub(s.id)
  }, React.createElement(Icon[s.icon], {
    size: 14
  }), " ", /*#__PURE__*/React.createElement("span", null, s.label))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(FilterChip, {
    label: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", null, "Last 30 days")),
    icon: "clock"
  })), /*#__PURE__*/React.createElement("div", {
    className: "stat-pills"
  }, stats.map(([label, n]) => /*#__PURE__*/React.createElement("div", {
    className: "stat-pill",
    key: label
  }, /*#__PURE__*/React.createElement("span", null, label), /*#__PURE__*/React.createElement("strong", null, n)))), /*#__PURE__*/React.createElement("div", {
    className: "chart-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "chart-card__head"
  }, /*#__PURE__*/React.createElement("h3", null, "E-contacts trend"), /*#__PURE__*/React.createElement(FilterChip, {
    label: "Day"
  })), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 880 220",
    className: "chart-svg",
    preserveAspectRatio: "none"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "gfill",
    x1: "0",
    x2: "0",
    y1: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#3D15E0",
    stopOpacity: "0.24"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#3D15E0",
    stopOpacity: "0"
  }))), /*#__PURE__*/React.createElement("g", {
    opacity: "0.3"
  }, [0, 40, 80, 120, 160, 200].map(y => /*#__PURE__*/React.createElement("line", {
    key: y,
    x1: "0",
    x2: "880",
    y1: y,
    y2: y,
    stroke: "#E3E4EA"
  }))), /*#__PURE__*/React.createElement("path", {
    d: "M0,180 L40,160 80,100 120,170 160,50 200,160 240,90 280,160 320,70 360,180 400,180 440,180 480,180 520,190 560,200 600,180 640,180 680,180 720,200 760,200 800,190 840,20 880,10 L880,220 L0,220 Z",
    fill: "url(#gfill)"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "0,180 40,160 80,100 120,170 160,50 200,160 240,90 280,160 320,70 360,180 400,180 440,180 480,180 520,190 560,200 600,180 640,180 680,180 720,200 760,200 800,190 840,20 880,10",
    fill: "none",
    stroke: "#3D15E0",
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "0,210 80,210 160,190 240,180 320,200 400,200 480,210 560,200 640,210 720,210 800,210 880,170",
    fill: "none",
    stroke: "#E8A033",
    strokeWidth: "2",
    strokeDasharray: "4 4"
  }), /*#__PURE__*/React.createElement("polyline", {
    points: "0,218 80,218 160,218 240,218 320,218 400,218 480,218 560,218 640,218 720,218 800,218 880,210",
    fill: "none",
    stroke: "#22967F",
    strokeWidth: "2",
    strokeDasharray: "4 4"
  })), /*#__PURE__*/React.createElement("div", {
    className: "chart-legend"
  }, /*#__PURE__*/React.createElement("span", {
    className: "leg"
  }, /*#__PURE__*/React.createElement("span", {
    className: "d",
    style: {
      background: '#3D15E0'
    }
  }), "Patient to clinic"), /*#__PURE__*/React.createElement("span", {
    className: "leg"
  }, /*#__PURE__*/React.createElement("span", {
    className: "d",
    style: {
      background: '#E8A033'
    }
  }), "Clinic to patient"), /*#__PURE__*/React.createElement("span", {
    className: "leg"
  }, /*#__PURE__*/React.createElement("span", {
    className: "d",
    style: {
      background: '#22967F'
    }
  }), "On behalf of patient"))));
}

// ---------- New e-contact modal ----------
function NewEContactModal({
  show,
  onClose
}) {
  const [type, setType] = useS('free');
  return /*#__PURE__*/React.createElement(Modal, {
    show: show,
    onClose: onClose,
    wide: true
  }, /*#__PURE__*/React.createElement("button", {
    className: "modal__close",
    onClick: onClose,
    "aria-label": "Close"
  }, React.createElement(Icon.close, {
    size: 18
  })), /*#__PURE__*/React.createElement(ProgressStepper, {
    steps: ['Search for patient', 'Patient data', 'Send message'],
    current: 0
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      font: '500 20px var(--font-sans)',
      margin: 0
    }
  }, "Create e-contact on the behalf of the patient"), /*#__PURE__*/React.createElement("label", {
    className: "radio-row"
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    checked: type === 'free',
    onChange: () => setType('free')
  }), /*#__PURE__*/React.createElement("span", {
    className: "radio-row__dot"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "radio-row__title"
  }, "Create a free form e-contact"), /*#__PURE__*/React.createElement("div", {
    className: "radio-row__sub"
  }, "Supporting questions to aid completion"))), /*#__PURE__*/React.createElement("label", {
    className: "radio-row"
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    checked: type === 'qn',
    onChange: () => setType('qn')
  }), /*#__PURE__*/React.createElement("span", {
    className: "radio-row__dot"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "radio-row__title"
  }, "Fill a questionnaire on behalf of the patient"), /*#__PURE__*/React.createElement("div", {
    className: "radio-row__sub"
  }, "For example, when a patient calls or visits in person, the EEK-2 questionnaire can be completed on their behalf."))), /*#__PURE__*/React.createElement("ul", {
    className: "bullets"
  }, /*#__PURE__*/React.createElement("li", null, "Making an e-contact on behalf of the patient is primarily intended for documenting appeals made over the phone."), /*#__PURE__*/React.createElement("li", null, "The selected patient will be set as the e-contact creator, and it is immediately sent to the clinic's dashboard."), /*#__PURE__*/React.createElement("li", null, "The patient receives a notification by e-mail when a clinician will respond to the e-contact."), /*#__PURE__*/React.createElement("li", null, "Search patient by their ", /*#__PURE__*/React.createElement("strong", null, "name, ID code"), " or ", /*#__PURE__*/React.createElement("strong", null, "e-mail address"), "."), /*#__PURE__*/React.createElement("li", null, "If the patient hasn't used the platform before, please enter their email.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 600,
      marginBottom: 8
    }
  }, "Search for patient"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("input", {
    style: {
      flex: 1,
      border: '1px solid var(--line)',
      borderRadius: 10,
      padding: '10px 12px',
      font: '400 14px var(--font-sans)',
      outline: 'none'
    },
    placeholder: "Name, personal code or email"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "Search"))));
}

// ---------- Query detail (mostly from earlier; now lighter) ----------
function QueryDetailScreen({
  onBack
}) {
  const [mainTab, setMainTab] = useS('comm');
  const [sideTab, setSideTab] = useS('attach');
  const [patientCanRespond, setPatientCanRespond] = useS(true);
  const [msg, setMsg] = useS('');
  const mainTabs = [{
    id: 'comm',
    label: 'Communication with patient'
  }, {
    id: 'treat',
    label: 'Treatment regimen'
  }, {
    id: 'health',
    label: 'Health profile'
  }];
  const sideTabs = [{
    id: 'attach',
    label: 'Attachments'
  }, {
    id: 'rx',
    label: 'Prescriptions'
  }, {
    id: 'prev',
    label: 'Previous queries'
  }, {
    id: 'qn',
    label: 'Questionnaires'
  }, {
    id: 'notes',
    label: 'Notes'
  }];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "detail-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "back-arrow",
    onClick: onBack
  }, React.createElement(Icon.arrowLeft, {
    size: 22
  })), /*#__PURE__*/React.createElement("h1", null, "Mary McQueen (33a 3k 9p) ", /*#__PURE__*/React.createElement("span", {
    className: "id-sep"
  }, "|"), " ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 400,
      color: 'var(--muted)'
    }
  }, "D05137 \xB7 Marianne Gustavson"))), /*#__PURE__*/React.createElement("div", {
    className: "meta-row"
  }, /*#__PURE__*/React.createElement(InfoChip, {
    icon: "idcard"
  }, "49001154225"), /*#__PURE__*/React.createElement(InfoChip, {
    icon: "mail"
  }, "marymcqueen@gmail.com"), /*#__PURE__*/React.createElement(InfoChip, {
    icon: "phone"
  }, "+44 55 555 555"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Julia",
    color: "#F7C9A8"
  }), /*#__PURE__*/React.createElement(Avatar, {
    name: "JL"
  }), /*#__PURE__*/React.createElement(StatusDot, {
    tone: "waiting"
  }, /*#__PURE__*/React.createElement("span", null, "Patient is waiting for reply")))), /*#__PURE__*/React.createElement("div", {
    className: "detail"
  }, /*#__PURE__*/React.createElement("div", {
    className: "panel",
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: mainTabs,
    value: mainTab,
    onChange: setMainTab
  }), /*#__PURE__*/React.createElement("div", {
    className: "qbody"
  }, /*#__PURE__*/React.createElement("div", {
    className: "qcat-strip"
  }, /*#__PURE__*/React.createElement("span", {
    className: "qcat-tag"
  }, "Prescription"), /*#__PURE__*/React.createElement("button", {
    className: "qcat-copy"
  }, React.createElement(Icon.copy, {
    size: 12
  }), " Copy"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("strong", null, "14.05.2023 (8:55) Query:"), " The patient requests a refill for the following medications: amlodipin 10mg, ramipril 5mg, metoprolol 50mg, dapagliflozin 10mg, furosemide 40mg, metformin 850mg")), /*#__PURE__*/React.createElement("h3", null, "From EMPA-REG OUTCOME\xAE study:"), /*#__PURE__*/React.createElement("div", {
    className: "rrr-row"
  }, /*#__PURE__*/React.createElement(RRRStat, {
    value: "38%",
    label: "Cardiovascular death"
  }), /*#__PURE__*/React.createElement(RRRStat, {
    value: "38%",
    label: "Incident or worsening nephropathy"
  }), /*#__PURE__*/React.createElement(RRRStat, {
    value: "38%",
    label: "Hospitalisation for heart failure"
  })), /*#__PURE__*/React.createElement(CalloutRow, null, "SGLT2 inhibitors (canagliflozin, dapagliflozin, empagliflozin, ertugliflozin, sotagliflozin) are recommended in patients with T2DM at risk of CV events to reduce hospitalizations for HF, major CV events, end-stage renal dysfunction, and CV death."), /*#__PURE__*/React.createElement(CalloutRow, null, "SGLT2 inhibitors (dapagliflozin, empagliflozin, and sotagliflozin) are recommended in patients with T2DM and HFrEF to reduce hospitalizations for HF and CV death."), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minHeight: 80
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "composer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "crow"
  }, /*#__PURE__*/React.createElement("button", {
    className: "stdreply"
  }, React.createElement(Icon.replies, {
    size: 14
  }), " Standard replies", React.createElement(Icon.chevronDown, {
    size: 14
  })), /*#__PURE__*/React.createElement("button", {
    className: "closebtn"
  }, React.createElement(Icon.closeBox, {
    size: 14
  }), " Close query")), /*#__PURE__*/React.createElement("div", {
    className: "msgrow"
  }, /*#__PURE__*/React.createElement("button", {
    className: "attach",
    "aria-label": "Attach file"
  }, React.createElement(Icon.paperclip, {
    size: 18,
    'aria-hidden': true
  })), /*#__PURE__*/React.createElement("label", {
    htmlFor: "msg-compose",
    className: "sr-only"
  }, "Send a message to the patient"), /*#__PURE__*/React.createElement("textarea", {
    id: "msg-compose",
    placeholder: "Send a message",
    value: msg,
    onChange: e => setMsg(e.target.value)
  }), /*#__PURE__*/React.createElement("div", {
    className: "togglewrap"
  }, /*#__PURE__*/React.createElement(Toggle, {
    checked: patientCanRespond,
    onChange: setPatientCanRespond,
    label: "Patient can respond immediately"
  })), /*#__PURE__*/React.createElement("button", {
    className: `sendbtn${msg.trim() ? ' sendbtn--on' : ''}`,
    disabled: !msg.trim(),
    "aria-label": "Send message"
  }, "Send")))), /*#__PURE__*/React.createElement("div", {
    className: "sidepanel"
  }, /*#__PURE__*/React.createElement(Tabs, {
    dense: true,
    items: sideTabs,
    value: sideTab,
    onChange: setSideTab
  }), /*#__PURE__*/React.createElement("div", {
    className: "sidepanel__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "sp-section-head"
  }, /*#__PURE__*/React.createElement("h4", null, React.createElement(Icon.download, {
    size: 13
  }), " Incoming attachments"), /*#__PURE__*/React.createElement("button", {
    className: "dl"
  }, React.createElement(Icon.download, {
    size: 12
  }), " Download all")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "file-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "file-thumb"
  }, "JPG"), /*#__PURE__*/React.createElement("div", {
    className: "meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fname"
  }, "IMG_48799.jpg"), /*#__PURE__*/React.createElement("span", {
    className: "fdate"
  }, "14.11.2022, 11:34"))), /*#__PURE__*/React.createElement("div", {
    className: "file-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "file-thumb"
  }, "JPG"), /*#__PURE__*/React.createElement("div", {
    className: "meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fname"
  }, "IMG_48801.jpg"), /*#__PURE__*/React.createElement("span", {
    className: "fdate"
  }, "14.11.2022, 11:35"))), /*#__PURE__*/React.createElement("div", {
    className: "file-row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "file-thumb file-thumb--pdf"
  }, "PDF"), /*#__PURE__*/React.createElement("div", {
    className: "meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "fname"
  }, "additional-questionnaire-filled.pdf"), /*#__PURE__*/React.createElement("span", {
    className: "fdate"
  }, "14.11.2022, 11:34")))), /*#__PURE__*/React.createElement("div", {
    className: "scan-ok"
  }, React.createElement(Icon.checkCircle, {
    size: 14,
    color: 'var(--success)'
  }), /*#__PURE__*/React.createElement("span", null, "The scanning of files has been completed, no viruses or malware were detected."))))));
}

// Owner-picker popover names, seen in the 4th row (Liza Brown) of the real Queries screen
const OWNER_PICKER_NAMES = ['Anna Atwood', 'Anton Artjov', 'Andreas Laser', 'Barbara Siid', 'Riina Tedre', 'Kristjan Tiitsaar', 'Liisa-Maria Tuuve'];
Object.assign(window, {
  AppShell,
  SideMenu,
  DashboardScreen,
  AdminScreen,
  AnalyticsScreen,
  NewEContactModal,
  QueryDetailScreen,
  QUERY_ROWS,
  OWNER_PICKER_NAMES
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/prm_app/screens.jsx", error: String((e && e.message) || e) }); }

})();
