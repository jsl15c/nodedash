const m =  require("mithril");

const Header = {
  view: (() => {
    return m("header", [
            m("div.logo", [
              m("div.node", [
                // letter n
                m("div.n", [
                  m("span", ""),
                  m("span", ""),
                  m("span", "")
                ]),
                // letter o
                m("div.o", [
                  m("span", ""),
                  m("span", ""),
                  m("span", ""),
                  m("span", ""),
                ]),
                // letter d
                m("div.d", [
                  m("span", ""),
                  m("span", ""),
                  m("span", ""),
                  m("span", ""),
                ]),
                // letter e
                m("div.e", [
                  m("span", ""),
                  m("span", ""),
                  m("span", ""),
                  m("span", ""),
                  m("span", "")
                ]),
              ]),
              m("div.dash", [
                // m("span", "dash")
                // letter d
                m("div.dash-bg", ""),
                m("div.d dd", [
                  m("span", ""),
                  m("span", ""),
                  m("span", ""),
                  m("span", ""),
                ]),
                m("div.a", [
                  m("span", ""),
                  m("span", ""),
                  m("span", "")
                ]),
                m("div.s", [
                  m("span", ""),
                  m("span", ""),
                  m("span", ""),
                  m("span", ""),
                  m("span", "")
                ]),
                m("div.h", [
                  m("span", ""),
                  m("span", ""),
                  m("span", ""),
                ]),
              ])
            ])
          ]);
  // close function
  })
};

module.exports = Header;
