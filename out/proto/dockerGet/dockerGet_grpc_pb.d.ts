// package: dockerGet
// file: dockerGet.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as dockerGet_pb from "./dockerGet_pb";

interface IDockerService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    checkHaveContainer: IDockerService_IcheckHaveContainer;
    listContainers: IDockerService_IlistContainers;
    listCourses: IDockerService_IlistCourses;
    getSectionInfo: IDockerService_IgetSectionInfo;
    listEnvironments: IDockerService_IlistEnvironments;
    listTemplates: IDockerService_IlistTemplates;
    addContainer: IDockerService_IaddContainer;
    instantAddContainer: IDockerService_IinstantAddContainer;
    removeContainer: IDockerService_IremoveContainer;
    submitFiles: IDockerService_IsubmitFiles;
    getContainerTime: IDockerService_IgetContainerTime;
    addTemplate: IDockerService_IaddTemplate;
    updateTemplate: IDockerService_IupdateTemplate;
    activateTemplate: IDockerService_IactivateTemplate;
    deactivateTemplate: IDockerService_IdeactivateTemplate;
    removeTemplate: IDockerService_IremoveTemplate;
    addEnvironment: IDockerService_IaddEnvironment;
    updateEnvironment: IDockerService_IupdateEnvironment;
    buildEnvironment: IDockerService_IbuildEnvironment;
    removeEnvironment: IDockerService_IremoveEnvironment;
    addTempContainer: IDockerService_IaddTempContainer;
    removeTempContainer: IDockerService_IremoveTempContainer;
    addSandboxImage: IDockerService_IaddSandboxImage;
    updateSandboxImage: IDockerService_IupdateSandboxImage;
    removeSandboxImage: IDockerService_IremoveSandboxImage;
    listSandboxImage: IDockerService_IlistSandboxImage;
    addSandbox: IDockerService_IaddSandbox;
    removeSandbox: IDockerService_IremoveSandbox;
    getUserData: IDockerService_IgetUserData;
    updateUserData: IDockerService_IupdateUserData;
    getNotificationToken: IDockerService_IgetNotificationToken;
    sendNotification: IDockerService_IsendNotification;
    listNotifications: IDockerService_IlistNotifications;
    removeNotification: IDockerService_IremoveNotification;
    updateNotificationToken: IDockerService_IupdateNotificationToken;
    updateSubscription: IDockerService_IupdateSubscription;
    googleOAuth: IDockerService_IgoogleOAuth;
    requestAccessToken: IDockerService_IrequestAccessToken;
    googleListFile: IDockerService_IgoogleListFile;
    googleDownloadFiles: IDockerService_IgoogleDownloadFiles;
    googleUploadFiles: IDockerService_IgoogleUploadFiles;
}

interface IDockerService_IcheckHaveContainer extends grpc.MethodDefinition<dockerGet_pb.CheckHaveContainerRequest, dockerGet_pb.SuccessStringReply> {
    path: "/dockerGet.Docker/checkHaveContainer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<dockerGet_pb.CheckHaveContainerRequest>;
    requestDeserialize: grpc.deserialize<dockerGet_pb.CheckHaveContainerRequest>;
    responseSerialize: grpc.serialize<dockerGet_pb.SuccessStringReply>;
    responseDeserialize: grpc.deserialize<dockerGet_pb.SuccessStringReply>;
}
interface IDockerService_IlistContainers extends grpc.MethodDefinition<dockerGet_pb.SubRequest, dockerGet_pb.ListContainerReply> {
    path: "/dockerGet.Docker/listContainers";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<dockerGet_pb.SubRequest>;
    requestDeserialize: grpc.deserialize<dockerGet_pb.SubRequest>;
    responseSerialize: grpc.serialize<dockerGet_pb.ListContainerReply>;
    responseDeserialize: grpc.deserialize<dockerGet_pb.ListContainerReply>;
}
interface IDockerService_IlistCourses extends grpc.MethodDefinition<dockerGet_pb.SubRequest, dockerGet_pb.ListCoursesReply> {
    path: "/dockerGet.Docker/listCourses";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<dockerGet_pb.SubRequest>;
    requestDeserialize: grpc.deserialize<dockerGet_pb.SubRequest>;
    responseSerialize: grpc.serialize<dockerGet_pb.ListCoursesReply>;
    responseDeserialize: grpc.deserialize<dockerGet_pb.ListCoursesReply>;
}
interface IDockerService_IgetSectionInfo extends grpc.MethodDefinition<dockerGet_pb.SectionAndSubRequest, dockerGet_pb.GetSectionInfoReply> {
    path: "/dockerGet.Docker/getSectionInfo";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<dockerGet_pb.SectionAndSubRequest>;
    requestDeserialize: grpc.deserialize<dockerGet_pb.SectionAndSubRequest>;
    responseSerialize: grpc.serialize<dockerGet_pb.GetSectionInfoReply>;
    responseDeserialize: grpc.deserialize<dockerGet_pb.GetSectionInfoReply>;
}
interface IDockerService_IlistEnvironments extends grpc.MethodDefinition<dockerGet_pb.SectionAndSubRequest, dockerGet_pb.ListEnvironmentsReply> {
    path: "/dockerGet.Docker/listEnvironments";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<dockerGet_pb.SectionAndSubRequest>;
    requestDeserialize: grpc.deserialize<dockerGet_pb.SectionAndSubRequest>;
    responseSerialize: grpc.serialize<dockerGet_pb.ListEnvironmentsReply>;
    responseDeserialize: grpc.deserialize<dockerGet_pb.ListEnvironmentsReply>;
}
interface IDockerService_IlistTemplates extends grpc.MethodDefinition<dockerGet_pb.SectionAndSubRequest, dockerGet_pb.ListTemplatesReply> {
    path: "/dockerGet.Docker/listTemplates";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<dockerGet_pb.SectionAndSubRequest>;
    requestDeserialize: grpc.deserialize<dockerGet_pb.SectionAndSubRequest>;
    responseSerialize: grpc.serialize<dockerGet_pb.ListTemplatesReply>;
    responseDeserialize: grpc.deserialize<dockerGet_pb.ListTemplatesReply>;
}
interface IDockerService_IaddContainer extends grpc.MethodDefinition<dockerGet_pb.AddContainerRequest, dockerGet_pb.AddContainerReply> {
    path: "/dockerGet.Docker/addContainer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<dockerGet_pb.AddContainerRequest>;
    requestDeserialize: grpc.deserialize<dockerGet_pb.AddContainerRequest>;
    responseSerialize: grpc.serialize<dockerGet_pb.AddContainerReply>;
    responseDeserialize: grpc.deserialize<dockerGet_pb.AddContainerReply>;
}
interface IDockerService_IinstantAddContainer extends grpc.MethodDefinition<dockerGet_pb.InstantAddContainerRequest, dockerGet_pb.AddContainerReply> {
    path: "/dockerGet.Docker/instantAddContainer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<dockerGet_pb.InstantAddContainerRequest>;
    requestDeserialize: grpc.deserialize<dockerGet_pb.InstantAddContainerRequest>;
    responseSerialize: grpc.serialize<dockerGet_pb.AddContainerReply>;
    responseDeserialize: grpc.deserialize<dockerGet_pb.AddContainerReply>;
}
interface IDockerService_IremoveContainer extends grpc.MethodDefinition<dockerGet_pb.RemoveContainerRequest, dockerGet_pb.SuccessStringReply> {
    path: "/dockerGet.Docker/removeContainer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<dockerGet_pb.RemoveContainerRequest>;
    requestDeserialize: grpc.deserialize<dockerGet_pb.RemoveContainerRequest>;
    responseSerialize: grpc.serialize<dockerGet_pb.SuccessStringReply>;
    responseDeserialize: grpc.deserialize<dockerGet_pb.SuccessStringReply>;
}
interface IDockerService_IsubmitFiles extends grpc.MethodDefinition<dockerGet_pb.SubmitFilesRequest, dockerGet_pb.SuccessStringReply> {
    path: "/dockerGet.Docker/submitFiles";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<dockerGet_pb.SubmitFilesRequest>;
    requestDeserialize: grpc.deserialize<dockerGet_pb.SubmitFilesRequest>;
    responseSerialize: grpc.serialize<dockerGet_pb.SuccessStringReply>;
    responseDeserialize: grpc.deserialize<dockerGet_pb.SuccessStringReply>;
}
interface IDockerService_IgetContainerTime extends grpc.MethodDefinition<dockerGet_pb.RemoveContainerRequest, dockerGet_pb.ContainerTimeReply> {
    path: "/dockerGet.Docker/getContainerTime";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<dockerGet_pb.RemoveContainerRequest>;
    requestDeserialize: grpc.deserialize<dockerGet_pb.RemoveContainerRequest>;
    responseSerialize: grpc.serialize<dockerGet_pb.ContainerTimeReply>;
    responseDeserialize: grpc.deserialize<dockerGet_pb.ContainerTimeReply>;
}
interface IDockerService_IaddTemplate extends grpc.MethodDefinition<dockerGet_pb.AddTemplateRequest, dockerGet_pb.AddTemplateReply> {
    path: "/dockerGet.Docker/addTemplate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<dockerGet_pb.AddTemplateRequest>;
    requestDeserialize: grpc.deserialize<dockerGet_pb.AddTemplateRequest>;
    responseSerialize: grpc.serialize<dockerGet_pb.AddTemplateReply>;
    responseDeserialize: grpc.deserialize<dockerGet_pb.AddTemplateReply>;
}
interface IDockerService_IupdateTemplate extends grpc.MethodDefinition<dockerGet_pb.UpdateTemplateRequest, dockerGet_pb.SuccessStringReply> {
    path: "/dockerGet.Docker/updateTemplate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<dockerGet_pb.UpdateTemplateRequest>;
    requestDeserialize: grpc.deserialize<dockerGet_pb.UpdateTemplateRequest>;
    responseSerialize: grpc.serialize<dockerGet_pb.SuccessStringReply>;
    responseDeserialize: grpc.deserialize<dockerGet_pb.SuccessStringReply>;
}
interface IDockerService_IactivateTemplate extends grpc.MethodDefinition<dockerGet_pb.TemplateIdRequest, dockerGet_pb.SuccessStringReply> {
    path: "/dockerGet.Docker/activateTemplate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<dockerGet_pb.TemplateIdRequest>;
    requestDeserialize: grpc.deserialize<dockerGet_pb.TemplateIdRequest>;
    responseSerialize: grpc.serialize<dockerGet_pb.SuccessStringReply>;
    responseDeserialize: grpc.deserialize<dockerGet_pb.SuccessStringReply>;
}
interface IDockerService_IdeactivateTemplate extends grpc.MethodDefinition<dockerGet_pb.TemplateIdRequest, dockerGet_pb.SuccessStringReply> {
    path: "/dockerGet.Docker/deactivateTemplate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<dockerGet_pb.TemplateIdRequest>;
    requestDeserialize: grpc.deserialize<dockerGet_pb.TemplateIdRequest>;
    responseSerialize: grpc.serialize<dockerGet_pb.SuccessStringReply>;
    responseDeserialize: grpc.deserialize<dockerGet_pb.SuccessStringReply>;
}
interface IDockerService_IremoveTemplate extends grpc.MethodDefinition<dockerGet_pb.TemplateIdRequest, dockerGet_pb.SuccessStringReply> {
    path: "/dockerGet.Docker/removeTemplate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<dockerGet_pb.TemplateIdRequest>;
    requestDeserialize: grpc.deserialize<dockerGet_pb.TemplateIdRequest>;
    responseSerialize: grpc.serialize<dockerGet_pb.SuccessStringReply>;
    responseDeserialize: grpc.deserialize<dockerGet_pb.SuccessStringReply>;
}
interface IDockerService_IaddEnvironment extends grpc.MethodDefinition<dockerGet_pb.AddEnvironmentRequest, dockerGet_pb.AddEnvironmentReply> {
    path: "/dockerGet.Docker/addEnvironment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<dockerGet_pb.AddEnvironmentRequest>;
    requestDeserialize: grpc.deserialize<dockerGet_pb.AddEnvironmentRequest>;
    responseSerialize: grpc.serialize<dockerGet_pb.AddEnvironmentReply>;
    responseDeserialize: grpc.deserialize<dockerGet_pb.AddEnvironmentReply>;
}
interface IDockerService_IupdateEnvironment extends grpc.MethodDefinition<dockerGet_pb.UpdateEnvironmentRequest, dockerGet_pb.SuccessStringReply> {
    path: "/dockerGet.Docker/updateEnvironment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<dockerGet_pb.UpdateEnvironmentRequest>;
    requestDeserialize: grpc.deserialize<dockerGet_pb.UpdateEnvironmentRequest>;
    responseSerialize: grpc.serialize<dockerGet_pb.SuccessStringReply>;
    responseDeserialize: grpc.deserialize<dockerGet_pb.SuccessStringReply>;
}
interface IDockerService_IbuildEnvironment extends grpc.MethodDefinition<dockerGet_pb.BuildEnvironmentRequest, dockerGet_pb.AddEnvironmentReply> {
    path: "/dockerGet.Docker/buildEnvironment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<dockerGet_pb.BuildEnvironmentRequest>;
    requestDeserialize: grpc.deserialize<dockerGet_pb.BuildEnvironmentRequest>;
    responseSerialize: grpc.serialize<dockerGet_pb.AddEnvironmentReply>;
    responseDeserialize: grpc.deserialize<dockerGet_pb.AddEnvironmentReply>;
}
interface IDockerService_IremoveEnvironment extends grpc.MethodDefinition<dockerGet_pb.EnvironmentIdRequest, dockerGet_pb.SuccessStringReply> {
    path: "/dockerGet.Docker/removeEnvironment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<dockerGet_pb.EnvironmentIdRequest>;
    requestDeserialize: grpc.deserialize<dockerGet_pb.EnvironmentIdRequest>;
    responseSerialize: grpc.serialize<dockerGet_pb.SuccessStringReply>;
    responseDeserialize: grpc.deserialize<dockerGet_pb.SuccessStringReply>;
}
interface IDockerService_IaddTempContainer extends grpc.MethodDefinition<dockerGet_pb.AddTempContainerRequest, dockerGet_pb.AddTempContainerReply> {
    path: "/dockerGet.Docker/addTempContainer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<dockerGet_pb.AddTempContainerRequest>;
    requestDeserialize: grpc.deserialize<dockerGet_pb.AddTempContainerRequest>;
    responseSerialize: grpc.serialize<dockerGet_pb.AddTempContainerReply>;
    responseDeserialize: grpc.deserialize<dockerGet_pb.AddTempContainerReply>;
}
interface IDockerService_IremoveTempContainer extends grpc.MethodDefinition<dockerGet_pb.RemoveTempContainerRequest, dockerGet_pb.SuccessStringReply> {
    path: "/dockerGet.Docker/removeTempContainer";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<dockerGet_pb.RemoveTempContainerRequest>;
    requestDeserialize: grpc.deserialize<dockerGet_pb.RemoveTempContainerRequest>;
    responseSerialize: grpc.serialize<dockerGet_pb.SuccessStringReply>;
    responseDeserialize: grpc.deserialize<dockerGet_pb.SuccessStringReply>;
}
interface IDockerService_IaddSandboxImage extends grpc.MethodDefinition<dockerGet_pb.AddSandBoxImageRequest, dockerGet_pb.AddSandBoxImageReply> {
    path: "/dockerGet.Docker/addSandboxImage";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<dockerGet_pb.AddSandBoxImageRequest>;
    requestDeserialize: grpc.deserialize<dockerGet_pb.AddSandBoxImageRequest>;
    responseSerialize: grpc.serialize<dockerGet_pb.AddSandBoxImageReply>;
    responseDeserialize: grpc.deserialize<dockerGet_pb.AddSandBoxImageReply>;
}
interface IDockerService_IupdateSandboxImage extends grpc.MethodDefinition<dockerGet_pb.UpdateSandBoxImageRequest, dockerGet_pb.SuccessStringReply> {
    path: "/dockerGet.Docker/updateSandboxImage";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<dockerGet_pb.UpdateSandBoxImageRequest>;
    requestDeserialize: grpc.deserialize<dockerGet_pb.UpdateSandBoxImageRequest>;
    responseSerialize: grpc.serialize<dockerGet_pb.SuccessStringReply>;
    responseDeserialize: grpc.deserialize<dockerGet_pb.SuccessStringReply>;
}
interface IDockerService_IremoveSandboxImage extends grpc.MethodDefinition<dockerGet_pb.SandBoxImageIdRequest, dockerGet_pb.SuccessStringReply> {
    path: "/dockerGet.Docker/removeSandboxImage";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<dockerGet_pb.SandBoxImageIdRequest>;
    requestDeserialize: grpc.deserialize<dockerGet_pb.SandBoxImageIdRequest>;
    responseSerialize: grpc.serialize<dockerGet_pb.SuccessStringReply>;
    responseDeserialize: grpc.deserialize<dockerGet_pb.SuccessStringReply>;
}
interface IDockerService_IlistSandboxImage extends grpc.MethodDefinition<dockerGet_pb.ListSandBoxImageRequest, dockerGet_pb.ListSandBoxImageReply> {
    path: "/dockerGet.Docker/listSandboxImage";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<dockerGet_pb.ListSandBoxImageRequest>;
    requestDeserialize: grpc.deserialize<dockerGet_pb.ListSandBoxImageRequest>;
    responseSerialize: grpc.serialize<dockerGet_pb.ListSandBoxImageReply>;
    responseDeserialize: grpc.deserialize<dockerGet_pb.ListSandBoxImageReply>;
}
interface IDockerService_IaddSandbox extends grpc.MethodDefinition<dockerGet_pb.AddSandBoxRequest, dockerGet_pb.AddSandBoxReply> {
    path: "/dockerGet.Docker/addSandbox";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<dockerGet_pb.AddSandBoxRequest>;
    requestDeserialize: grpc.deserialize<dockerGet_pb.AddSandBoxRequest>;
    responseSerialize: grpc.serialize<dockerGet_pb.AddSandBoxReply>;
    responseDeserialize: grpc.deserialize<dockerGet_pb.AddSandBoxReply>;
}
interface IDockerService_IremoveSandbox extends grpc.MethodDefinition<dockerGet_pb.SandBoxIdRequest, dockerGet_pb.SuccessStringReply> {
    path: "/dockerGet.Docker/removeSandbox";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<dockerGet_pb.SandBoxIdRequest>;
    requestDeserialize: grpc.deserialize<dockerGet_pb.SandBoxIdRequest>;
    responseSerialize: grpc.serialize<dockerGet_pb.SuccessStringReply>;
    responseDeserialize: grpc.deserialize<dockerGet_pb.SuccessStringReply>;
}
interface IDockerService_IgetUserData extends grpc.MethodDefinition<dockerGet_pb.GetUserDataRequest, dockerGet_pb.GetUserDataReply> {
    path: "/dockerGet.Docker/getUserData";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<dockerGet_pb.GetUserDataRequest>;
    requestDeserialize: grpc.deserialize<dockerGet_pb.GetUserDataRequest>;
    responseSerialize: grpc.serialize<dockerGet_pb.GetUserDataReply>;
    responseDeserialize: grpc.deserialize<dockerGet_pb.GetUserDataReply>;
}
interface IDockerService_IupdateUserData extends grpc.MethodDefinition<dockerGet_pb.UpdateUserDataRequest, dockerGet_pb.SuccessStringReply> {
    path: "/dockerGet.Docker/updateUserData";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<dockerGet_pb.UpdateUserDataRequest>;
    requestDeserialize: grpc.deserialize<dockerGet_pb.UpdateUserDataRequest>;
    responseSerialize: grpc.serialize<dockerGet_pb.SuccessStringReply>;
    responseDeserialize: grpc.deserialize<dockerGet_pb.SuccessStringReply>;
}
interface IDockerService_IgetNotificationToken extends grpc.MethodDefinition<dockerGet_pb.SubRequest, dockerGet_pb.GetNotificationTokenReply> {
    path: "/dockerGet.Docker/getNotificationToken";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<dockerGet_pb.SubRequest>;
    requestDeserialize: grpc.deserialize<dockerGet_pb.SubRequest>;
    responseSerialize: grpc.serialize<dockerGet_pb.GetNotificationTokenReply>;
    responseDeserialize: grpc.deserialize<dockerGet_pb.GetNotificationTokenReply>;
}
interface IDockerService_IsendNotification extends grpc.MethodDefinition<dockerGet_pb.SendNotificationRequest, dockerGet_pb.SendNotificationReply> {
    path: "/dockerGet.Docker/sendNotification";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<dockerGet_pb.SendNotificationRequest>;
    requestDeserialize: grpc.deserialize<dockerGet_pb.SendNotificationRequest>;
    responseSerialize: grpc.serialize<dockerGet_pb.SendNotificationReply>;
    responseDeserialize: grpc.deserialize<dockerGet_pb.SendNotificationReply>;
}
interface IDockerService_IlistNotifications extends grpc.MethodDefinition<dockerGet_pb.UserIdRequest, dockerGet_pb.ListNotificationsReply> {
    path: "/dockerGet.Docker/listNotifications";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<dockerGet_pb.UserIdRequest>;
    requestDeserialize: grpc.deserialize<dockerGet_pb.UserIdRequest>;
    responseSerialize: grpc.serialize<dockerGet_pb.ListNotificationsReply>;
    responseDeserialize: grpc.deserialize<dockerGet_pb.ListNotificationsReply>;
}
interface IDockerService_IremoveNotification extends grpc.MethodDefinition<dockerGet_pb.RemoveNotificationRequest, dockerGet_pb.SuccessStringReply> {
    path: "/dockerGet.Docker/removeNotification";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<dockerGet_pb.RemoveNotificationRequest>;
    requestDeserialize: grpc.deserialize<dockerGet_pb.RemoveNotificationRequest>;
    responseSerialize: grpc.serialize<dockerGet_pb.SuccessStringReply>;
    responseDeserialize: grpc.deserialize<dockerGet_pb.SuccessStringReply>;
}
interface IDockerService_IupdateNotificationToken extends grpc.MethodDefinition<dockerGet_pb.UpdateNotificationTokenRequest, dockerGet_pb.SuccessStringReply> {
    path: "/dockerGet.Docker/updateNotificationToken";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<dockerGet_pb.UpdateNotificationTokenRequest>;
    requestDeserialize: grpc.deserialize<dockerGet_pb.UpdateNotificationTokenRequest>;
    responseSerialize: grpc.serialize<dockerGet_pb.SuccessStringReply>;
    responseDeserialize: grpc.deserialize<dockerGet_pb.SuccessStringReply>;
}
interface IDockerService_IupdateSubscription extends grpc.MethodDefinition<dockerGet_pb.UpdateSubscriptionRequest, dockerGet_pb.SuccessStringReply> {
    path: "/dockerGet.Docker/updateSubscription";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<dockerGet_pb.UpdateSubscriptionRequest>;
    requestDeserialize: grpc.deserialize<dockerGet_pb.UpdateSubscriptionRequest>;
    responseSerialize: grpc.serialize<dockerGet_pb.SuccessStringReply>;
    responseDeserialize: grpc.deserialize<dockerGet_pb.SuccessStringReply>;
}
interface IDockerService_IgoogleOAuth extends grpc.MethodDefinition<dockerGet_pb.EmptyRequest, dockerGet_pb.SuccessStringReply> {
    path: "/dockerGet.Docker/googleOAuth";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<dockerGet_pb.EmptyRequest>;
    requestDeserialize: grpc.deserialize<dockerGet_pb.EmptyRequest>;
    responseSerialize: grpc.serialize<dockerGet_pb.SuccessStringReply>;
    responseDeserialize: grpc.deserialize<dockerGet_pb.SuccessStringReply>;
}
interface IDockerService_IrequestAccessToken extends grpc.MethodDefinition<dockerGet_pb.CodeRequest, dockerGet_pb.SuccessStringReply> {
    path: "/dockerGet.Docker/requestAccessToken";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<dockerGet_pb.CodeRequest>;
    requestDeserialize: grpc.deserialize<dockerGet_pb.CodeRequest>;
    responseSerialize: grpc.serialize<dockerGet_pb.SuccessStringReply>;
    responseDeserialize: grpc.deserialize<dockerGet_pb.SuccessStringReply>;
}
interface IDockerService_IgoogleListFile extends grpc.MethodDefinition<dockerGet_pb.ListFilesRequest, dockerGet_pb.ChildrenReply> {
    path: "/dockerGet.Docker/googleListFile";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<dockerGet_pb.ListFilesRequest>;
    requestDeserialize: grpc.deserialize<dockerGet_pb.ListFilesRequest>;
    responseSerialize: grpc.serialize<dockerGet_pb.ChildrenReply>;
    responseDeserialize: grpc.deserialize<dockerGet_pb.ChildrenReply>;
}
interface IDockerService_IgoogleDownloadFiles extends grpc.MethodDefinition<dockerGet_pb.DownloadRequest, dockerGet_pb.SuccessStringReply> {
    path: "/dockerGet.Docker/googleDownloadFiles";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<dockerGet_pb.DownloadRequest>;
    requestDeserialize: grpc.deserialize<dockerGet_pb.DownloadRequest>;
    responseSerialize: grpc.serialize<dockerGet_pb.SuccessStringReply>;
    responseDeserialize: grpc.deserialize<dockerGet_pb.SuccessStringReply>;
}
interface IDockerService_IgoogleUploadFiles extends grpc.MethodDefinition<dockerGet_pb.UploadRequest, dockerGet_pb.SuccessStringReply> {
    path: "/dockerGet.Docker/googleUploadFiles";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<dockerGet_pb.UploadRequest>;
    requestDeserialize: grpc.deserialize<dockerGet_pb.UploadRequest>;
    responseSerialize: grpc.serialize<dockerGet_pb.SuccessStringReply>;
    responseDeserialize: grpc.deserialize<dockerGet_pb.SuccessStringReply>;
}

export const DockerService: IDockerService;

export interface IDockerServer {
    checkHaveContainer: grpc.handleUnaryCall<dockerGet_pb.CheckHaveContainerRequest, dockerGet_pb.SuccessStringReply>;
    listContainers: grpc.handleUnaryCall<dockerGet_pb.SubRequest, dockerGet_pb.ListContainerReply>;
    listCourses: grpc.handleUnaryCall<dockerGet_pb.SubRequest, dockerGet_pb.ListCoursesReply>;
    getSectionInfo: grpc.handleUnaryCall<dockerGet_pb.SectionAndSubRequest, dockerGet_pb.GetSectionInfoReply>;
    listEnvironments: grpc.handleUnaryCall<dockerGet_pb.SectionAndSubRequest, dockerGet_pb.ListEnvironmentsReply>;
    listTemplates: grpc.handleUnaryCall<dockerGet_pb.SectionAndSubRequest, dockerGet_pb.ListTemplatesReply>;
    addContainer: grpc.handleUnaryCall<dockerGet_pb.AddContainerRequest, dockerGet_pb.AddContainerReply>;
    instantAddContainer: grpc.handleUnaryCall<dockerGet_pb.InstantAddContainerRequest, dockerGet_pb.AddContainerReply>;
    removeContainer: grpc.handleUnaryCall<dockerGet_pb.RemoveContainerRequest, dockerGet_pb.SuccessStringReply>;
    submitFiles: grpc.handleUnaryCall<dockerGet_pb.SubmitFilesRequest, dockerGet_pb.SuccessStringReply>;
    getContainerTime: grpc.handleUnaryCall<dockerGet_pb.RemoveContainerRequest, dockerGet_pb.ContainerTimeReply>;
    addTemplate: grpc.handleUnaryCall<dockerGet_pb.AddTemplateRequest, dockerGet_pb.AddTemplateReply>;
    updateTemplate: grpc.handleUnaryCall<dockerGet_pb.UpdateTemplateRequest, dockerGet_pb.SuccessStringReply>;
    activateTemplate: grpc.handleUnaryCall<dockerGet_pb.TemplateIdRequest, dockerGet_pb.SuccessStringReply>;
    deactivateTemplate: grpc.handleUnaryCall<dockerGet_pb.TemplateIdRequest, dockerGet_pb.SuccessStringReply>;
    removeTemplate: grpc.handleUnaryCall<dockerGet_pb.TemplateIdRequest, dockerGet_pb.SuccessStringReply>;
    addEnvironment: grpc.handleUnaryCall<dockerGet_pb.AddEnvironmentRequest, dockerGet_pb.AddEnvironmentReply>;
    updateEnvironment: grpc.handleUnaryCall<dockerGet_pb.UpdateEnvironmentRequest, dockerGet_pb.SuccessStringReply>;
    buildEnvironment: grpc.handleUnaryCall<dockerGet_pb.BuildEnvironmentRequest, dockerGet_pb.AddEnvironmentReply>;
    removeEnvironment: grpc.handleUnaryCall<dockerGet_pb.EnvironmentIdRequest, dockerGet_pb.SuccessStringReply>;
    addTempContainer: grpc.handleUnaryCall<dockerGet_pb.AddTempContainerRequest, dockerGet_pb.AddTempContainerReply>;
    removeTempContainer: grpc.handleUnaryCall<dockerGet_pb.RemoveTempContainerRequest, dockerGet_pb.SuccessStringReply>;
    addSandboxImage: grpc.handleUnaryCall<dockerGet_pb.AddSandBoxImageRequest, dockerGet_pb.AddSandBoxImageReply>;
    updateSandboxImage: grpc.handleUnaryCall<dockerGet_pb.UpdateSandBoxImageRequest, dockerGet_pb.SuccessStringReply>;
    removeSandboxImage: grpc.handleUnaryCall<dockerGet_pb.SandBoxImageIdRequest, dockerGet_pb.SuccessStringReply>;
    listSandboxImage: grpc.handleUnaryCall<dockerGet_pb.ListSandBoxImageRequest, dockerGet_pb.ListSandBoxImageReply>;
    addSandbox: grpc.handleUnaryCall<dockerGet_pb.AddSandBoxRequest, dockerGet_pb.AddSandBoxReply>;
    removeSandbox: grpc.handleUnaryCall<dockerGet_pb.SandBoxIdRequest, dockerGet_pb.SuccessStringReply>;
    getUserData: grpc.handleUnaryCall<dockerGet_pb.GetUserDataRequest, dockerGet_pb.GetUserDataReply>;
    updateUserData: grpc.handleUnaryCall<dockerGet_pb.UpdateUserDataRequest, dockerGet_pb.SuccessStringReply>;
    getNotificationToken: grpc.handleUnaryCall<dockerGet_pb.SubRequest, dockerGet_pb.GetNotificationTokenReply>;
    sendNotification: grpc.handleUnaryCall<dockerGet_pb.SendNotificationRequest, dockerGet_pb.SendNotificationReply>;
    listNotifications: grpc.handleUnaryCall<dockerGet_pb.UserIdRequest, dockerGet_pb.ListNotificationsReply>;
    removeNotification: grpc.handleUnaryCall<dockerGet_pb.RemoveNotificationRequest, dockerGet_pb.SuccessStringReply>;
    updateNotificationToken: grpc.handleUnaryCall<dockerGet_pb.UpdateNotificationTokenRequest, dockerGet_pb.SuccessStringReply>;
    updateSubscription: grpc.handleUnaryCall<dockerGet_pb.UpdateSubscriptionRequest, dockerGet_pb.SuccessStringReply>;
    googleOAuth: grpc.handleUnaryCall<dockerGet_pb.EmptyRequest, dockerGet_pb.SuccessStringReply>;
    requestAccessToken: grpc.handleUnaryCall<dockerGet_pb.CodeRequest, dockerGet_pb.SuccessStringReply>;
    googleListFile: grpc.handleUnaryCall<dockerGet_pb.ListFilesRequest, dockerGet_pb.ChildrenReply>;
    googleDownloadFiles: grpc.handleUnaryCall<dockerGet_pb.DownloadRequest, dockerGet_pb.SuccessStringReply>;
    googleUploadFiles: grpc.handleUnaryCall<dockerGet_pb.UploadRequest, dockerGet_pb.SuccessStringReply>;
}

export interface IDockerClient {
    checkHaveContainer(request: dockerGet_pb.CheckHaveContainerRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    checkHaveContainer(request: dockerGet_pb.CheckHaveContainerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    checkHaveContainer(request: dockerGet_pb.CheckHaveContainerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    listContainers(request: dockerGet_pb.SubRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.ListContainerReply) => void): grpc.ClientUnaryCall;
    listContainers(request: dockerGet_pb.SubRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.ListContainerReply) => void): grpc.ClientUnaryCall;
    listContainers(request: dockerGet_pb.SubRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.ListContainerReply) => void): grpc.ClientUnaryCall;
    listCourses(request: dockerGet_pb.SubRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.ListCoursesReply) => void): grpc.ClientUnaryCall;
    listCourses(request: dockerGet_pb.SubRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.ListCoursesReply) => void): grpc.ClientUnaryCall;
    listCourses(request: dockerGet_pb.SubRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.ListCoursesReply) => void): grpc.ClientUnaryCall;
    getSectionInfo(request: dockerGet_pb.SectionAndSubRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.GetSectionInfoReply) => void): grpc.ClientUnaryCall;
    getSectionInfo(request: dockerGet_pb.SectionAndSubRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.GetSectionInfoReply) => void): grpc.ClientUnaryCall;
    getSectionInfo(request: dockerGet_pb.SectionAndSubRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.GetSectionInfoReply) => void): grpc.ClientUnaryCall;
    listEnvironments(request: dockerGet_pb.SectionAndSubRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.ListEnvironmentsReply) => void): grpc.ClientUnaryCall;
    listEnvironments(request: dockerGet_pb.SectionAndSubRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.ListEnvironmentsReply) => void): grpc.ClientUnaryCall;
    listEnvironments(request: dockerGet_pb.SectionAndSubRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.ListEnvironmentsReply) => void): grpc.ClientUnaryCall;
    listTemplates(request: dockerGet_pb.SectionAndSubRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.ListTemplatesReply) => void): grpc.ClientUnaryCall;
    listTemplates(request: dockerGet_pb.SectionAndSubRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.ListTemplatesReply) => void): grpc.ClientUnaryCall;
    listTemplates(request: dockerGet_pb.SectionAndSubRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.ListTemplatesReply) => void): grpc.ClientUnaryCall;
    addContainer(request: dockerGet_pb.AddContainerRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.AddContainerReply) => void): grpc.ClientUnaryCall;
    addContainer(request: dockerGet_pb.AddContainerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.AddContainerReply) => void): grpc.ClientUnaryCall;
    addContainer(request: dockerGet_pb.AddContainerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.AddContainerReply) => void): grpc.ClientUnaryCall;
    instantAddContainer(request: dockerGet_pb.InstantAddContainerRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.AddContainerReply) => void): grpc.ClientUnaryCall;
    instantAddContainer(request: dockerGet_pb.InstantAddContainerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.AddContainerReply) => void): grpc.ClientUnaryCall;
    instantAddContainer(request: dockerGet_pb.InstantAddContainerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.AddContainerReply) => void): grpc.ClientUnaryCall;
    removeContainer(request: dockerGet_pb.RemoveContainerRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    removeContainer(request: dockerGet_pb.RemoveContainerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    removeContainer(request: dockerGet_pb.RemoveContainerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    submitFiles(request: dockerGet_pb.SubmitFilesRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    submitFiles(request: dockerGet_pb.SubmitFilesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    submitFiles(request: dockerGet_pb.SubmitFilesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    getContainerTime(request: dockerGet_pb.RemoveContainerRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.ContainerTimeReply) => void): grpc.ClientUnaryCall;
    getContainerTime(request: dockerGet_pb.RemoveContainerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.ContainerTimeReply) => void): grpc.ClientUnaryCall;
    getContainerTime(request: dockerGet_pb.RemoveContainerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.ContainerTimeReply) => void): grpc.ClientUnaryCall;
    addTemplate(request: dockerGet_pb.AddTemplateRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.AddTemplateReply) => void): grpc.ClientUnaryCall;
    addTemplate(request: dockerGet_pb.AddTemplateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.AddTemplateReply) => void): grpc.ClientUnaryCall;
    addTemplate(request: dockerGet_pb.AddTemplateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.AddTemplateReply) => void): grpc.ClientUnaryCall;
    updateTemplate(request: dockerGet_pb.UpdateTemplateRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    updateTemplate(request: dockerGet_pb.UpdateTemplateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    updateTemplate(request: dockerGet_pb.UpdateTemplateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    activateTemplate(request: dockerGet_pb.TemplateIdRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    activateTemplate(request: dockerGet_pb.TemplateIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    activateTemplate(request: dockerGet_pb.TemplateIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    deactivateTemplate(request: dockerGet_pb.TemplateIdRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    deactivateTemplate(request: dockerGet_pb.TemplateIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    deactivateTemplate(request: dockerGet_pb.TemplateIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    removeTemplate(request: dockerGet_pb.TemplateIdRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    removeTemplate(request: dockerGet_pb.TemplateIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    removeTemplate(request: dockerGet_pb.TemplateIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    addEnvironment(request: dockerGet_pb.AddEnvironmentRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.AddEnvironmentReply) => void): grpc.ClientUnaryCall;
    addEnvironment(request: dockerGet_pb.AddEnvironmentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.AddEnvironmentReply) => void): grpc.ClientUnaryCall;
    addEnvironment(request: dockerGet_pb.AddEnvironmentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.AddEnvironmentReply) => void): grpc.ClientUnaryCall;
    updateEnvironment(request: dockerGet_pb.UpdateEnvironmentRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    updateEnvironment(request: dockerGet_pb.UpdateEnvironmentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    updateEnvironment(request: dockerGet_pb.UpdateEnvironmentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    buildEnvironment(request: dockerGet_pb.BuildEnvironmentRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.AddEnvironmentReply) => void): grpc.ClientUnaryCall;
    buildEnvironment(request: dockerGet_pb.BuildEnvironmentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.AddEnvironmentReply) => void): grpc.ClientUnaryCall;
    buildEnvironment(request: dockerGet_pb.BuildEnvironmentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.AddEnvironmentReply) => void): grpc.ClientUnaryCall;
    removeEnvironment(request: dockerGet_pb.EnvironmentIdRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    removeEnvironment(request: dockerGet_pb.EnvironmentIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    removeEnvironment(request: dockerGet_pb.EnvironmentIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    addTempContainer(request: dockerGet_pb.AddTempContainerRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.AddTempContainerReply) => void): grpc.ClientUnaryCall;
    addTempContainer(request: dockerGet_pb.AddTempContainerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.AddTempContainerReply) => void): grpc.ClientUnaryCall;
    addTempContainer(request: dockerGet_pb.AddTempContainerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.AddTempContainerReply) => void): grpc.ClientUnaryCall;
    removeTempContainer(request: dockerGet_pb.RemoveTempContainerRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    removeTempContainer(request: dockerGet_pb.RemoveTempContainerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    removeTempContainer(request: dockerGet_pb.RemoveTempContainerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    addSandboxImage(request: dockerGet_pb.AddSandBoxImageRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.AddSandBoxImageReply) => void): grpc.ClientUnaryCall;
    addSandboxImage(request: dockerGet_pb.AddSandBoxImageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.AddSandBoxImageReply) => void): grpc.ClientUnaryCall;
    addSandboxImage(request: dockerGet_pb.AddSandBoxImageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.AddSandBoxImageReply) => void): grpc.ClientUnaryCall;
    updateSandboxImage(request: dockerGet_pb.UpdateSandBoxImageRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    updateSandboxImage(request: dockerGet_pb.UpdateSandBoxImageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    updateSandboxImage(request: dockerGet_pb.UpdateSandBoxImageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    removeSandboxImage(request: dockerGet_pb.SandBoxImageIdRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    removeSandboxImage(request: dockerGet_pb.SandBoxImageIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    removeSandboxImage(request: dockerGet_pb.SandBoxImageIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    listSandboxImage(request: dockerGet_pb.ListSandBoxImageRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.ListSandBoxImageReply) => void): grpc.ClientUnaryCall;
    listSandboxImage(request: dockerGet_pb.ListSandBoxImageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.ListSandBoxImageReply) => void): grpc.ClientUnaryCall;
    listSandboxImage(request: dockerGet_pb.ListSandBoxImageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.ListSandBoxImageReply) => void): grpc.ClientUnaryCall;
    addSandbox(request: dockerGet_pb.AddSandBoxRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.AddSandBoxReply) => void): grpc.ClientUnaryCall;
    addSandbox(request: dockerGet_pb.AddSandBoxRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.AddSandBoxReply) => void): grpc.ClientUnaryCall;
    addSandbox(request: dockerGet_pb.AddSandBoxRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.AddSandBoxReply) => void): grpc.ClientUnaryCall;
    removeSandbox(request: dockerGet_pb.SandBoxIdRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    removeSandbox(request: dockerGet_pb.SandBoxIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    removeSandbox(request: dockerGet_pb.SandBoxIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    getUserData(request: dockerGet_pb.GetUserDataRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.GetUserDataReply) => void): grpc.ClientUnaryCall;
    getUserData(request: dockerGet_pb.GetUserDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.GetUserDataReply) => void): grpc.ClientUnaryCall;
    getUserData(request: dockerGet_pb.GetUserDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.GetUserDataReply) => void): grpc.ClientUnaryCall;
    updateUserData(request: dockerGet_pb.UpdateUserDataRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    updateUserData(request: dockerGet_pb.UpdateUserDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    updateUserData(request: dockerGet_pb.UpdateUserDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    getNotificationToken(request: dockerGet_pb.SubRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.GetNotificationTokenReply) => void): grpc.ClientUnaryCall;
    getNotificationToken(request: dockerGet_pb.SubRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.GetNotificationTokenReply) => void): grpc.ClientUnaryCall;
    getNotificationToken(request: dockerGet_pb.SubRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.GetNotificationTokenReply) => void): grpc.ClientUnaryCall;
    sendNotification(request: dockerGet_pb.SendNotificationRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SendNotificationReply) => void): grpc.ClientUnaryCall;
    sendNotification(request: dockerGet_pb.SendNotificationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SendNotificationReply) => void): grpc.ClientUnaryCall;
    sendNotification(request: dockerGet_pb.SendNotificationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SendNotificationReply) => void): grpc.ClientUnaryCall;
    listNotifications(request: dockerGet_pb.UserIdRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.ListNotificationsReply) => void): grpc.ClientUnaryCall;
    listNotifications(request: dockerGet_pb.UserIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.ListNotificationsReply) => void): grpc.ClientUnaryCall;
    listNotifications(request: dockerGet_pb.UserIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.ListNotificationsReply) => void): grpc.ClientUnaryCall;
    removeNotification(request: dockerGet_pb.RemoveNotificationRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    removeNotification(request: dockerGet_pb.RemoveNotificationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    removeNotification(request: dockerGet_pb.RemoveNotificationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    updateNotificationToken(request: dockerGet_pb.UpdateNotificationTokenRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    updateNotificationToken(request: dockerGet_pb.UpdateNotificationTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    updateNotificationToken(request: dockerGet_pb.UpdateNotificationTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    updateSubscription(request: dockerGet_pb.UpdateSubscriptionRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    updateSubscription(request: dockerGet_pb.UpdateSubscriptionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    updateSubscription(request: dockerGet_pb.UpdateSubscriptionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    googleOAuth(request: dockerGet_pb.EmptyRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    googleOAuth(request: dockerGet_pb.EmptyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    googleOAuth(request: dockerGet_pb.EmptyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    requestAccessToken(request: dockerGet_pb.CodeRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    requestAccessToken(request: dockerGet_pb.CodeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    requestAccessToken(request: dockerGet_pb.CodeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    googleListFile(request: dockerGet_pb.ListFilesRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.ChildrenReply) => void): grpc.ClientUnaryCall;
    googleListFile(request: dockerGet_pb.ListFilesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.ChildrenReply) => void): grpc.ClientUnaryCall;
    googleListFile(request: dockerGet_pb.ListFilesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.ChildrenReply) => void): grpc.ClientUnaryCall;
    googleDownloadFiles(request: dockerGet_pb.DownloadRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    googleDownloadFiles(request: dockerGet_pb.DownloadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    googleDownloadFiles(request: dockerGet_pb.DownloadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    googleUploadFiles(request: dockerGet_pb.UploadRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    googleUploadFiles(request: dockerGet_pb.UploadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    googleUploadFiles(request: dockerGet_pb.UploadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
}

export class DockerClient extends grpc.Client implements IDockerClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public checkHaveContainer(request: dockerGet_pb.CheckHaveContainerRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    public checkHaveContainer(request: dockerGet_pb.CheckHaveContainerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    public checkHaveContainer(request: dockerGet_pb.CheckHaveContainerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    public listContainers(request: dockerGet_pb.SubRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.ListContainerReply) => void): grpc.ClientUnaryCall;
    public listContainers(request: dockerGet_pb.SubRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.ListContainerReply) => void): grpc.ClientUnaryCall;
    public listContainers(request: dockerGet_pb.SubRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.ListContainerReply) => void): grpc.ClientUnaryCall;
    public listCourses(request: dockerGet_pb.SubRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.ListCoursesReply) => void): grpc.ClientUnaryCall;
    public listCourses(request: dockerGet_pb.SubRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.ListCoursesReply) => void): grpc.ClientUnaryCall;
    public listCourses(request: dockerGet_pb.SubRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.ListCoursesReply) => void): grpc.ClientUnaryCall;
    public getSectionInfo(request: dockerGet_pb.SectionAndSubRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.GetSectionInfoReply) => void): grpc.ClientUnaryCall;
    public getSectionInfo(request: dockerGet_pb.SectionAndSubRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.GetSectionInfoReply) => void): grpc.ClientUnaryCall;
    public getSectionInfo(request: dockerGet_pb.SectionAndSubRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.GetSectionInfoReply) => void): grpc.ClientUnaryCall;
    public listEnvironments(request: dockerGet_pb.SectionAndSubRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.ListEnvironmentsReply) => void): grpc.ClientUnaryCall;
    public listEnvironments(request: dockerGet_pb.SectionAndSubRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.ListEnvironmentsReply) => void): grpc.ClientUnaryCall;
    public listEnvironments(request: dockerGet_pb.SectionAndSubRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.ListEnvironmentsReply) => void): grpc.ClientUnaryCall;
    public listTemplates(request: dockerGet_pb.SectionAndSubRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.ListTemplatesReply) => void): grpc.ClientUnaryCall;
    public listTemplates(request: dockerGet_pb.SectionAndSubRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.ListTemplatesReply) => void): grpc.ClientUnaryCall;
    public listTemplates(request: dockerGet_pb.SectionAndSubRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.ListTemplatesReply) => void): grpc.ClientUnaryCall;
    public addContainer(request: dockerGet_pb.AddContainerRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.AddContainerReply) => void): grpc.ClientUnaryCall;
    public addContainer(request: dockerGet_pb.AddContainerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.AddContainerReply) => void): grpc.ClientUnaryCall;
    public addContainer(request: dockerGet_pb.AddContainerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.AddContainerReply) => void): grpc.ClientUnaryCall;
    public instantAddContainer(request: dockerGet_pb.InstantAddContainerRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.AddContainerReply) => void): grpc.ClientUnaryCall;
    public instantAddContainer(request: dockerGet_pb.InstantAddContainerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.AddContainerReply) => void): grpc.ClientUnaryCall;
    public instantAddContainer(request: dockerGet_pb.InstantAddContainerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.AddContainerReply) => void): grpc.ClientUnaryCall;
    public removeContainer(request: dockerGet_pb.RemoveContainerRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    public removeContainer(request: dockerGet_pb.RemoveContainerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    public removeContainer(request: dockerGet_pb.RemoveContainerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    public submitFiles(request: dockerGet_pb.SubmitFilesRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    public submitFiles(request: dockerGet_pb.SubmitFilesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    public submitFiles(request: dockerGet_pb.SubmitFilesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    public getContainerTime(request: dockerGet_pb.RemoveContainerRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.ContainerTimeReply) => void): grpc.ClientUnaryCall;
    public getContainerTime(request: dockerGet_pb.RemoveContainerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.ContainerTimeReply) => void): grpc.ClientUnaryCall;
    public getContainerTime(request: dockerGet_pb.RemoveContainerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.ContainerTimeReply) => void): grpc.ClientUnaryCall;
    public addTemplate(request: dockerGet_pb.AddTemplateRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.AddTemplateReply) => void): grpc.ClientUnaryCall;
    public addTemplate(request: dockerGet_pb.AddTemplateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.AddTemplateReply) => void): grpc.ClientUnaryCall;
    public addTemplate(request: dockerGet_pb.AddTemplateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.AddTemplateReply) => void): grpc.ClientUnaryCall;
    public updateTemplate(request: dockerGet_pb.UpdateTemplateRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    public updateTemplate(request: dockerGet_pb.UpdateTemplateRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    public updateTemplate(request: dockerGet_pb.UpdateTemplateRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    public activateTemplate(request: dockerGet_pb.TemplateIdRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    public activateTemplate(request: dockerGet_pb.TemplateIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    public activateTemplate(request: dockerGet_pb.TemplateIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    public deactivateTemplate(request: dockerGet_pb.TemplateIdRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    public deactivateTemplate(request: dockerGet_pb.TemplateIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    public deactivateTemplate(request: dockerGet_pb.TemplateIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    public removeTemplate(request: dockerGet_pb.TemplateIdRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    public removeTemplate(request: dockerGet_pb.TemplateIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    public removeTemplate(request: dockerGet_pb.TemplateIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    public addEnvironment(request: dockerGet_pb.AddEnvironmentRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.AddEnvironmentReply) => void): grpc.ClientUnaryCall;
    public addEnvironment(request: dockerGet_pb.AddEnvironmentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.AddEnvironmentReply) => void): grpc.ClientUnaryCall;
    public addEnvironment(request: dockerGet_pb.AddEnvironmentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.AddEnvironmentReply) => void): grpc.ClientUnaryCall;
    public updateEnvironment(request: dockerGet_pb.UpdateEnvironmentRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    public updateEnvironment(request: dockerGet_pb.UpdateEnvironmentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    public updateEnvironment(request: dockerGet_pb.UpdateEnvironmentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    public buildEnvironment(request: dockerGet_pb.BuildEnvironmentRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.AddEnvironmentReply) => void): grpc.ClientUnaryCall;
    public buildEnvironment(request: dockerGet_pb.BuildEnvironmentRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.AddEnvironmentReply) => void): grpc.ClientUnaryCall;
    public buildEnvironment(request: dockerGet_pb.BuildEnvironmentRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.AddEnvironmentReply) => void): grpc.ClientUnaryCall;
    public removeEnvironment(request: dockerGet_pb.EnvironmentIdRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    public removeEnvironment(request: dockerGet_pb.EnvironmentIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    public removeEnvironment(request: dockerGet_pb.EnvironmentIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    public addTempContainer(request: dockerGet_pb.AddTempContainerRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.AddTempContainerReply) => void): grpc.ClientUnaryCall;
    public addTempContainer(request: dockerGet_pb.AddTempContainerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.AddTempContainerReply) => void): grpc.ClientUnaryCall;
    public addTempContainer(request: dockerGet_pb.AddTempContainerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.AddTempContainerReply) => void): grpc.ClientUnaryCall;
    public removeTempContainer(request: dockerGet_pb.RemoveTempContainerRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    public removeTempContainer(request: dockerGet_pb.RemoveTempContainerRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    public removeTempContainer(request: dockerGet_pb.RemoveTempContainerRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    public addSandboxImage(request: dockerGet_pb.AddSandBoxImageRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.AddSandBoxImageReply) => void): grpc.ClientUnaryCall;
    public addSandboxImage(request: dockerGet_pb.AddSandBoxImageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.AddSandBoxImageReply) => void): grpc.ClientUnaryCall;
    public addSandboxImage(request: dockerGet_pb.AddSandBoxImageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.AddSandBoxImageReply) => void): grpc.ClientUnaryCall;
    public updateSandboxImage(request: dockerGet_pb.UpdateSandBoxImageRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    public updateSandboxImage(request: dockerGet_pb.UpdateSandBoxImageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    public updateSandboxImage(request: dockerGet_pb.UpdateSandBoxImageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    public removeSandboxImage(request: dockerGet_pb.SandBoxImageIdRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    public removeSandboxImage(request: dockerGet_pb.SandBoxImageIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    public removeSandboxImage(request: dockerGet_pb.SandBoxImageIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    public listSandboxImage(request: dockerGet_pb.ListSandBoxImageRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.ListSandBoxImageReply) => void): grpc.ClientUnaryCall;
    public listSandboxImage(request: dockerGet_pb.ListSandBoxImageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.ListSandBoxImageReply) => void): grpc.ClientUnaryCall;
    public listSandboxImage(request: dockerGet_pb.ListSandBoxImageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.ListSandBoxImageReply) => void): grpc.ClientUnaryCall;
    public addSandbox(request: dockerGet_pb.AddSandBoxRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.AddSandBoxReply) => void): grpc.ClientUnaryCall;
    public addSandbox(request: dockerGet_pb.AddSandBoxRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.AddSandBoxReply) => void): grpc.ClientUnaryCall;
    public addSandbox(request: dockerGet_pb.AddSandBoxRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.AddSandBoxReply) => void): grpc.ClientUnaryCall;
    public removeSandbox(request: dockerGet_pb.SandBoxIdRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    public removeSandbox(request: dockerGet_pb.SandBoxIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    public removeSandbox(request: dockerGet_pb.SandBoxIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    public getUserData(request: dockerGet_pb.GetUserDataRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.GetUserDataReply) => void): grpc.ClientUnaryCall;
    public getUserData(request: dockerGet_pb.GetUserDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.GetUserDataReply) => void): grpc.ClientUnaryCall;
    public getUserData(request: dockerGet_pb.GetUserDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.GetUserDataReply) => void): grpc.ClientUnaryCall;
    public updateUserData(request: dockerGet_pb.UpdateUserDataRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    public updateUserData(request: dockerGet_pb.UpdateUserDataRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    public updateUserData(request: dockerGet_pb.UpdateUserDataRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    public getNotificationToken(request: dockerGet_pb.SubRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.GetNotificationTokenReply) => void): grpc.ClientUnaryCall;
    public getNotificationToken(request: dockerGet_pb.SubRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.GetNotificationTokenReply) => void): grpc.ClientUnaryCall;
    public getNotificationToken(request: dockerGet_pb.SubRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.GetNotificationTokenReply) => void): grpc.ClientUnaryCall;
    public sendNotification(request: dockerGet_pb.SendNotificationRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SendNotificationReply) => void): grpc.ClientUnaryCall;
    public sendNotification(request: dockerGet_pb.SendNotificationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SendNotificationReply) => void): grpc.ClientUnaryCall;
    public sendNotification(request: dockerGet_pb.SendNotificationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SendNotificationReply) => void): grpc.ClientUnaryCall;
    public listNotifications(request: dockerGet_pb.UserIdRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.ListNotificationsReply) => void): grpc.ClientUnaryCall;
    public listNotifications(request: dockerGet_pb.UserIdRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.ListNotificationsReply) => void): grpc.ClientUnaryCall;
    public listNotifications(request: dockerGet_pb.UserIdRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.ListNotificationsReply) => void): grpc.ClientUnaryCall;
    public removeNotification(request: dockerGet_pb.RemoveNotificationRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    public removeNotification(request: dockerGet_pb.RemoveNotificationRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    public removeNotification(request: dockerGet_pb.RemoveNotificationRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    public updateNotificationToken(request: dockerGet_pb.UpdateNotificationTokenRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    public updateNotificationToken(request: dockerGet_pb.UpdateNotificationTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    public updateNotificationToken(request: dockerGet_pb.UpdateNotificationTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    public updateSubscription(request: dockerGet_pb.UpdateSubscriptionRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    public updateSubscription(request: dockerGet_pb.UpdateSubscriptionRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    public updateSubscription(request: dockerGet_pb.UpdateSubscriptionRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    public googleOAuth(request: dockerGet_pb.EmptyRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    public googleOAuth(request: dockerGet_pb.EmptyRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    public googleOAuth(request: dockerGet_pb.EmptyRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    public requestAccessToken(request: dockerGet_pb.CodeRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    public requestAccessToken(request: dockerGet_pb.CodeRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    public requestAccessToken(request: dockerGet_pb.CodeRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    public googleListFile(request: dockerGet_pb.ListFilesRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.ChildrenReply) => void): grpc.ClientUnaryCall;
    public googleListFile(request: dockerGet_pb.ListFilesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.ChildrenReply) => void): grpc.ClientUnaryCall;
    public googleListFile(request: dockerGet_pb.ListFilesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.ChildrenReply) => void): grpc.ClientUnaryCall;
    public googleDownloadFiles(request: dockerGet_pb.DownloadRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    public googleDownloadFiles(request: dockerGet_pb.DownloadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    public googleDownloadFiles(request: dockerGet_pb.DownloadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    public googleUploadFiles(request: dockerGet_pb.UploadRequest, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    public googleUploadFiles(request: dockerGet_pb.UploadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
    public googleUploadFiles(request: dockerGet_pb.UploadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: dockerGet_pb.SuccessStringReply) => void): grpc.ClientUnaryCall;
}
