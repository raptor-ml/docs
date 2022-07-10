---
title: Counters
---
We can also build features that have a lifetime counter, like "lifetime views".
This is actually a simple `int` feature, that we're incrementing atomically:

```python showLineNumbers
@natun.register(int, freshness='1m', staleness='10h')
def views(**req: NatunRequest):
    """lifetime views"""
    incr_feature("views.default", req["entity_id"], 1)
    return
```