return {
    {
        Meta = function(meta)
            if meta.jupyter.docusaurus then
                for k, v in pairs(meta.jupyter.docusaurus) do
                    meta[k] = v
                end
                meta.jupyter.docusaurus = nil
            end
            return meta
        end,
    }
}
