# Aggregations

Often the Feature we want to calculate is an aggregate of multiple events, for example - the sum number of visits to a product page, the average time per slide, or the variance of the length of interactions with the user.

Calculating aggregations in real-time in production requires careful balancing between resources - storage (state), computation, and connections. Natun walks this balance ensuring that operational systems are not overloaded with queries, that data is fresh and precise (to reduce drift), and storage is reasonable.

When creating a [Feature Definition](./), you can select the aggregation type and the time length of the bucket to aggregate on. Future versions might also offer buckets capped with a number of items or spanning user sessions. 

![Natun intenal aggregation algorithm](../../../assets/counters.drawio.png)

Internally, Natun applies a sliding window and incrementally caches the incoming results to calculate aggregations.





