# Documentation for core/v1alpha1/types.proto

<a name="documentation-for-api-endpoints"></a>
## Documentation for API Endpoints

All URIs are relative to *http://localhost*

| Class | Method | HTTP request | Description |
|------------ | ------------- | ------------- | -------------|
| *EngineServiceApi* | [**engineServiceAppend**](Apis/EngineServiceApi.md#engineserviceappend) | **POST** /{fqn}/append |  |
*EngineServiceApi* | [**engineServiceFeatureDescriptor**](Apis/EngineServiceApi.md#engineservicefeaturedescriptor) | **HEAD** /{selector} |  |
*EngineServiceApi* | [**engineServiceGet**](Apis/EngineServiceApi.md#engineserviceget) | **GET** /{selector} |  |
*EngineServiceApi* | [**engineServiceIncr**](Apis/EngineServiceApi.md#engineserviceincr) | **POST** /{fqn}/incr |  |
*EngineServiceApi* | [**engineServiceSet**](Apis/EngineServiceApi.md#engineserviceset) | **PUT** /{selector} |  |
*EngineServiceApi* | [**engineServiceUpdate**](Apis/EngineServiceApi.md#engineserviceupdate) | **POST** /{selector} |  |
| *RuntimeServiceApi* | [**runtimeServiceExecuteProgram**](Apis/RuntimeServiceApi.md#runtimeserviceexecuteprogram) | **POST** /program/{fqn} |  |
*RuntimeServiceApi* | [**runtimeServiceLoadProgram**](Apis/RuntimeServiceApi.md#runtimeserviceloadprogram) | **POST** /program |  |


<a name="documentation-for-models"></a>
## Documentation for Models

 - [RuntimeService_ExecuteProgram_request](./Models/RuntimeService_ExecuteProgram_request.md)
 - [protobufAny](./Models/protobufAny.md)
 - [rpcStatus](./Models/rpcStatus.md)
 - [v1alpha1AggrFn](./Models/v1alpha1AggrFn.md)
 - [v1alpha1AppendResponse](./Models/v1alpha1AppendResponse.md)
 - [v1alpha1ExecuteProgramResponse](./Models/v1alpha1ExecuteProgramResponse.md)
 - [v1alpha1FeatureDescriptor](./Models/v1alpha1FeatureDescriptor.md)
 - [v1alpha1FeatureDescriptorResponse](./Models/v1alpha1FeatureDescriptorResponse.md)
 - [v1alpha1FeatureValue](./Models/v1alpha1FeatureValue.md)
 - [v1alpha1GetResponse](./Models/v1alpha1GetResponse.md)
 - [v1alpha1IncrResponse](./Models/v1alpha1IncrResponse.md)
 - [v1alpha1KeepPrevious](./Models/v1alpha1KeepPrevious.md)
 - [v1alpha1List](./Models/v1alpha1List.md)
 - [v1alpha1LoadProgramRequest](./Models/v1alpha1LoadProgramRequest.md)
 - [v1alpha1LoadProgramResponse](./Models/v1alpha1LoadProgramResponse.md)
 - [v1alpha1Primitive](./Models/v1alpha1Primitive.md)
 - [v1alpha1Scalar](./Models/v1alpha1Scalar.md)
 - [v1alpha1SetResponse](./Models/v1alpha1SetResponse.md)
 - [v1alpha1SideEffect](./Models/v1alpha1SideEffect.md)
 - [v1alpha1UpdateResponse](./Models/v1alpha1UpdateResponse.md)
 - [v1alpha1Value](./Models/v1alpha1Value.md)


<a name="documentation-for-authorization"></a>
## Documentation for Authorization

All endpoints do not require authorization.
