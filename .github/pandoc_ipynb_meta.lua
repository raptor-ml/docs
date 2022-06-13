-- to use the debugger, you need to have lua installed, and mobdebug installed via luarocks
--md = require("mobdebug")
--md.start()
--then use md.pause() to put a breakpoint.

function Meta(meta)
    if meta.jupyter.docusaurus then
        for k, v in pairs(meta.jupyter.docusaurus) do
            meta[k] = v
        end
        meta.jupyter.docusaurus = nil
    end
    return meta
end

function Div(el)
    if el.attributes["docusaurus_hide"] == "true" then
        el.content=""
    end
    return el
end