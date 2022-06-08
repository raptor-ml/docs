return {
    {
        Meta = function(meta)
            if meta.jupyter.frontmatter then
                for k, v in pairs(meta.jupyter.frontmatter) do
                    meta[k] = v
                end
                meta.jupyter.frontmatter = nil
            end
            return meta
        end,
    }
}