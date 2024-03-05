-- to use the debugger, you need to have lua installed, and mobdebug installed via luarocks
-- md = require("mobdebug")
-- md.start()
-- then use md.pause() to put a breakpoint.
--
-- alternatively use the logging.lua script. make sure to run this first: export LUA_PATH="`pwd`/.github/?.lua;;"
--
-- local logging = require 'pandoc-logging'
--
-- function Pandoc(pandoc)
--     logging.temp('pandoc', pandoc)
-- end

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

-- fix a problem with <> in codeblocks
function CodeBlock(block)
  if block.attr.classes[1] == nil then
    table.insert(block.attr.classes, "console")
  end
  return block
end
