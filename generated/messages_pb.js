// source: messages.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
goog.object.extend(proto, google_protobuf_struct_pb);
goog.exportSymbol('proto.AdminGlobalMessage', null, global);
goog.exportSymbol('proto.AdminMessage', null, global);
goog.exportSymbol('proto.AdminPusherToBackMessage', null, global);
goog.exportSymbol('proto.AdminPusherToBackMessage.MessageCase', null, global);
goog.exportSymbol('proto.AdminRoomMessage', null, global);
goog.exportSymbol('proto.AnswerMessage', null, global);
goog.exportSymbol('proto.AnswerMessage.AnswerCase', null, global);
goog.exportSymbol('proto.ApplicationMessage', null, global);
goog.exportSymbol('proto.AreaProperties', null, global);
goog.exportSymbol('proto.AskPositionMessage', null, global);
goog.exportSymbol('proto.AvailabilityStatus', null, global);
goog.exportSymbol('proto.BanMessage', null, global);
goog.exportSymbol('proto.BanUserByUuidMessage', null, global);
goog.exportSymbol('proto.BanUserMessage', null, global);
goog.exportSymbol('proto.BatchMessage', null, global);
goog.exportSymbol('proto.BatchToPusherMessage', null, global);
goog.exportSymbol('proto.BatchToPusherRoomMessage', null, global);
goog.exportSymbol('proto.CharacterLayerMessage', null, global);
goog.exportSymbol('proto.ChatMessagePrompt', null, global);
goog.exportSymbol('proto.ChatMessagePrompt.MessageCase', null, global);
goog.exportSymbol('proto.ClientToServerMessage', null, global);
goog.exportSymbol('proto.ClientToServerMessage.MessageCase', null, global);
goog.exportSymbol('proto.CompanionMessage', null, global);
goog.exportSymbol('proto.CreateAreaMessage', null, global);
goog.exportSymbol('proto.CreateEntityMessage', null, global);
goog.exportSymbol('proto.CustomAreaProperty', null, global);
goog.exportSymbol('proto.CustomAreaProperty.ValueCase', null, global);
goog.exportSymbol('proto.DeleteAreaMessage', null, global);
goog.exportSymbol('proto.DeleteEntityMessage', null, global);
goog.exportSymbol('proto.EditMapCommandMessage', null, global);
goog.exportSymbol('proto.EditMapCommandWithKeyMessage', null, global);
goog.exportSymbol('proto.EditMapCommandsArrayMessage', null, global);
goog.exportSymbol('proto.EditMapMessage', null, global);
goog.exportSymbol('proto.EditMapMessage.MessageCase', null, global);
goog.exportSymbol('proto.EmoteEventMessage', null, global);
goog.exportSymbol('proto.EmotePromptMessage', null, global);
goog.exportSymbol('proto.EmptyMessage', null, global);
goog.exportSymbol('proto.ErrorMessage', null, global);
goog.exportSymbol('proto.ErrorScreenMessage', null, global);
goog.exportSymbol('proto.FollowAbortMessage', null, global);
goog.exportSymbol('proto.FollowConfirmationMessage', null, global);
goog.exportSymbol('proto.FollowRequestMessage', null, global);
goog.exportSymbol('proto.GroupDeleteMessage', null, global);
goog.exportSymbol('proto.GroupLeftZoneMessage', null, global);
goog.exportSymbol('proto.GroupUpdateMessage', null, global);
goog.exportSymbol('proto.GroupUpdateZoneMessage', null, global);
goog.exportSymbol('proto.GroupUsersUpdateMessage', null, global);
goog.exportSymbol('proto.InvalidTextureMessage', null, global);
goog.exportSymbol('proto.ItemEventMessage', null, global);
goog.exportSymbol('proto.ItemStateMessage', null, global);
goog.exportSymbol('proto.JitsiJwtAnswer', null, global);
goog.exportSymbol('proto.JitsiJwtQuery', null, global);
goog.exportSymbol('proto.JoinBBBMeetingAnswer', null, global);
goog.exportSymbol('proto.JoinBBBMeetingQuery', null, global);
goog.exportSymbol('proto.JoinMucRoomMessage', null, global);
goog.exportSymbol('proto.JoinRoomMessage', null, global);
goog.exportSymbol('proto.LeaveMucRoomMessage', null, global);
goog.exportSymbol('proto.LockGroupPromptMessage', null, global);
goog.exportSymbol('proto.MapStorageRefreshMessage', null, global);
goog.exportSymbol('proto.MapStorageToBackMessage', null, global);
goog.exportSymbol('proto.MapStorageToBackMessage.MessageCase', null, global);
goog.exportSymbol('proto.MapStorageUrlMessage', null, global);
goog.exportSymbol('proto.ModifyAreaMessage', null, global);
goog.exportSymbol('proto.ModifyEntityMessage', null, global);
goog.exportSymbol('proto.MoveToPositionMessage', null, global);
goog.exportSymbol('proto.MucRoomDefinitionMessage', null, global);
goog.exportSymbol('proto.PingMessage', null, global);
goog.exportSymbol('proto.PlayGlobalMessage', null, global);
goog.exportSymbol('proto.PlayerDetailsUpdatedMessage', null, global);
goog.exportSymbol('proto.PointMessage', null, global);
goog.exportSymbol('proto.PositionMessage', null, global);
goog.exportSymbol('proto.PositionMessage.Direction', null, global);
goog.exportSymbol('proto.PusherToBackMessage', null, global);
goog.exportSymbol('proto.PusherToBackMessage.MessageCase', null, global);
goog.exportSymbol('proto.QueryMessage', null, global);
goog.exportSymbol('proto.QueryMessage.QueryCase', null, global);
goog.exportSymbol('proto.RefreshRoomMessage', null, global);
goog.exportSymbol('proto.RefreshRoomPromptMessage', null, global);
goog.exportSymbol('proto.ReportPlayerMessage', null, global);
goog.exportSymbol('proto.RoomDescription', null, global);
goog.exportSymbol('proto.RoomJoinedMessage', null, global);
goog.exportSymbol('proto.RoomMessage', null, global);
goog.exportSymbol('proto.RoomsList', null, global);
goog.exportSymbol('proto.SendUserMessage', null, global);
goog.exportSymbol('proto.ServerToAdminClientMessage', null, global);
goog.exportSymbol('proto.ServerToAdminClientMessage.MessageCase', null, global);
goog.exportSymbol('proto.ServerToClientMessage', null, global);
goog.exportSymbol('proto.ServerToClientMessage.MessageCase', null, global);
goog.exportSymbol('proto.SetPlayerDetailsMessage', null, global);
goog.exportSymbol('proto.SetPlayerVariableMessage', null, global);
goog.exportSymbol('proto.SetPlayerVariableMessage.Scope', null, global);
goog.exportSymbol('proto.StopGlobalMessage', null, global);
goog.exportSymbol('proto.SubMessage', null, global);
goog.exportSymbol('proto.SubMessage.MessageCase', null, global);
goog.exportSymbol('proto.SubToPusherMessage', null, global);
goog.exportSymbol('proto.SubToPusherMessage.MessageCase', null, global);
goog.exportSymbol('proto.SubToPusherRoomMessage', null, global);
goog.exportSymbol('proto.SubToPusherRoomMessage.MessageCase', null, global);
goog.exportSymbol('proto.TeleportMessageMessage', null, global);
goog.exportSymbol('proto.TokenExpiredMessage', null, global);
goog.exportSymbol('proto.UpdateMapToNewestMessage', null, global);
goog.exportSymbol('proto.UpdateMapToNewestWithKeyMessage', null, global);
goog.exportSymbol('proto.UserJoinedMessage', null, global);
goog.exportSymbol('proto.UserJoinedRoomMessage', null, global);
goog.exportSymbol('proto.UserJoinedZoneMessage', null, global);
goog.exportSymbol('proto.UserLeftMessage', null, global);
goog.exportSymbol('proto.UserLeftRoomMessage', null, global);
goog.exportSymbol('proto.UserLeftZoneMessage', null, global);
goog.exportSymbol('proto.UserMovedMessage', null, global);
goog.exportSymbol('proto.UserMovesMessage', null, global);
goog.exportSymbol('proto.VariableMessage', null, global);
goog.exportSymbol('proto.VariableWithTagMessage', null, global);
goog.exportSymbol('proto.ViewportMessage', null, global);
goog.exportSymbol('proto.WebRtcDisconnectMessage', null, global);
goog.exportSymbol('proto.WebRtcSignalToClientMessage', null, global);
goog.exportSymbol('proto.WebRtcSignalToServerMessage', null, global);
goog.exportSymbol('proto.WebRtcStartMessage', null, global);
goog.exportSymbol('proto.WorldConnexionMessage', null, global);
goog.exportSymbol('proto.WorldFullMessage', null, global);
goog.exportSymbol('proto.WorldFullWarningMessage', null, global);
goog.exportSymbol('proto.WorldFullWarningToRoomMessage', null, global);
goog.exportSymbol('proto.XmppSettingsMessage', null, global);
goog.exportSymbol('proto.Zone', null, global);
goog.exportSymbol('proto.ZoneMessage', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PositionMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PositionMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PositionMessage.displayName = 'proto.PositionMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PointMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PointMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PointMessage.displayName = 'proto.PointMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ViewportMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ViewportMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ViewportMessage.displayName = 'proto.ViewportMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CharacterLayerMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.CharacterLayerMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.CharacterLayerMessage.displayName = 'proto.CharacterLayerMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ApplicationMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ApplicationMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ApplicationMessage.displayName = 'proto.ApplicationMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CompanionMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.CompanionMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.CompanionMessage.displayName = 'proto.CompanionMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PingMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PingMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PingMessage.displayName = 'proto.PingMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.UpdateMapToNewestMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.UpdateMapToNewestMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.UpdateMapToNewestMessage.displayName = 'proto.UpdateMapToNewestMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.UpdateMapToNewestWithKeyMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.UpdateMapToNewestWithKeyMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.UpdateMapToNewestWithKeyMessage.displayName = 'proto.UpdateMapToNewestWithKeyMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SetPlayerDetailsMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SetPlayerDetailsMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.SetPlayerDetailsMessage.displayName = 'proto.SetPlayerDetailsMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.UserMovesMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.UserMovesMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.UserMovesMessage.displayName = 'proto.UserMovesMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.WebRtcSignalToServerMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.WebRtcSignalToServerMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.WebRtcSignalToServerMessage.displayName = 'proto.WebRtcSignalToServerMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ReportPlayerMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ReportPlayerMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ReportPlayerMessage.displayName = 'proto.ReportPlayerMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.EmotePromptMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.EmotePromptMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.EmotePromptMessage.displayName = 'proto.EmotePromptMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.EmoteEventMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.EmoteEventMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.EmoteEventMessage.displayName = 'proto.EmoteEventMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.FollowRequestMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.FollowRequestMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.FollowRequestMessage.displayName = 'proto.FollowRequestMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.FollowConfirmationMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.FollowConfirmationMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.FollowConfirmationMessage.displayName = 'proto.FollowConfirmationMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.FollowAbortMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.FollowAbortMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.FollowAbortMessage.displayName = 'proto.FollowAbortMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.LockGroupPromptMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.LockGroupPromptMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.LockGroupPromptMessage.displayName = 'proto.LockGroupPromptMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.EditMapMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.EditMapMessage.oneofGroups_);
};
goog.inherits(proto.EditMapMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.EditMapMessage.displayName = 'proto.EditMapMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.EditMapCommandMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.EditMapCommandMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.EditMapCommandMessage.displayName = 'proto.EditMapCommandMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.EditMapCommandsArrayMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.EditMapCommandsArrayMessage.repeatedFields_, null);
};
goog.inherits(proto.EditMapCommandsArrayMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.EditMapCommandsArrayMessage.displayName = 'proto.EditMapCommandsArrayMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.EditMapCommandWithKeyMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.EditMapCommandWithKeyMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.EditMapCommandWithKeyMessage.displayName = 'proto.EditMapCommandWithKeyMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ModifyAreaMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ModifyAreaMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ModifyAreaMessage.displayName = 'proto.ModifyAreaMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AreaProperties = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AreaProperties, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AreaProperties.displayName = 'proto.AreaProperties';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CustomAreaProperty = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.CustomAreaProperty.oneofGroups_);
};
goog.inherits(proto.CustomAreaProperty, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.CustomAreaProperty.displayName = 'proto.CustomAreaProperty';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DeleteAreaMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DeleteAreaMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DeleteAreaMessage.displayName = 'proto.DeleteAreaMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CreateAreaMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.CreateAreaMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.CreateAreaMessage.displayName = 'proto.CreateAreaMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.CreateEntityMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.CreateEntityMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.CreateEntityMessage.displayName = 'proto.CreateEntityMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.DeleteEntityMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.DeleteEntityMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.DeleteEntityMessage.displayName = 'proto.DeleteEntityMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ModifyEntityMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ModifyEntityMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ModifyEntityMessage.displayName = 'proto.ModifyEntityMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ClientToServerMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ClientToServerMessage.oneofGroups_);
};
goog.inherits(proto.ClientToServerMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ClientToServerMessage.displayName = 'proto.ClientToServerMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ItemEventMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ItemEventMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ItemEventMessage.displayName = 'proto.ItemEventMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.VariableMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.VariableMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.VariableMessage.displayName = 'proto.VariableMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SetPlayerVariableMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SetPlayerVariableMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.SetPlayerVariableMessage.displayName = 'proto.SetPlayerVariableMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.VariableWithTagMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.VariableWithTagMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.VariableWithTagMessage.displayName = 'proto.VariableWithTagMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PlayGlobalMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PlayGlobalMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PlayGlobalMessage.displayName = 'proto.PlayGlobalMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.StopGlobalMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.StopGlobalMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.StopGlobalMessage.displayName = 'proto.StopGlobalMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.QueryMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.QueryMessage.oneofGroups_);
};
goog.inherits(proto.QueryMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.QueryMessage.displayName = 'proto.QueryMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JitsiJwtQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.JitsiJwtQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JitsiJwtQuery.displayName = 'proto.JitsiJwtQuery';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JoinBBBMeetingQuery = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.JoinBBBMeetingQuery, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JoinBBBMeetingQuery.displayName = 'proto.JoinBBBMeetingQuery';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AnswerMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.AnswerMessage.oneofGroups_);
};
goog.inherits(proto.AnswerMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AnswerMessage.displayName = 'proto.AnswerMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JitsiJwtAnswer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.JitsiJwtAnswer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JitsiJwtAnswer.displayName = 'proto.JitsiJwtAnswer';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JoinBBBMeetingAnswer = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.JoinBBBMeetingAnswer, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JoinBBBMeetingAnswer.displayName = 'proto.JoinBBBMeetingAnswer';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.UserMovedMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.UserMovedMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.UserMovedMessage.displayName = 'proto.UserMovedMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MoveToPositionMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MoveToPositionMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MoveToPositionMessage.displayName = 'proto.MoveToPositionMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SubMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.SubMessage.oneofGroups_);
};
goog.inherits(proto.SubMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.SubMessage.displayName = 'proto.SubMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.BatchMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.BatchMessage.repeatedFields_, null);
};
goog.inherits(proto.BatchMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.BatchMessage.displayName = 'proto.BatchMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GroupUpdateMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GroupUpdateMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GroupUpdateMessage.displayName = 'proto.GroupUpdateMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GroupDeleteMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GroupDeleteMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GroupDeleteMessage.displayName = 'proto.GroupDeleteMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.UserJoinedMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.UserJoinedMessage.repeatedFields_, null);
};
goog.inherits(proto.UserJoinedMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.UserJoinedMessage.displayName = 'proto.UserJoinedMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.UserLeftMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.UserLeftMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.UserLeftMessage.displayName = 'proto.UserLeftMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ErrorMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ErrorMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ErrorMessage.displayName = 'proto.ErrorMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ErrorScreenMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ErrorScreenMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ErrorScreenMessage.displayName = 'proto.ErrorScreenMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ItemStateMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ItemStateMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ItemStateMessage.displayName = 'proto.ItemStateMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GroupUsersUpdateMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.GroupUsersUpdateMessage.repeatedFields_, null);
};
goog.inherits(proto.GroupUsersUpdateMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GroupUsersUpdateMessage.displayName = 'proto.GroupUsersUpdateMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RoomJoinedMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.RoomJoinedMessage.repeatedFields_, null);
};
goog.inherits(proto.RoomJoinedMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RoomJoinedMessage.displayName = 'proto.RoomJoinedMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.WebRtcStartMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.WebRtcStartMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.WebRtcStartMessage.displayName = 'proto.WebRtcStartMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.WebRtcDisconnectMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.WebRtcDisconnectMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.WebRtcDisconnectMessage.displayName = 'proto.WebRtcDisconnectMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.WebRtcSignalToClientMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.WebRtcSignalToClientMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.WebRtcSignalToClientMessage.displayName = 'proto.WebRtcSignalToClientMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.TeleportMessageMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.TeleportMessageMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.TeleportMessageMessage.displayName = 'proto.TeleportMessageMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SendUserMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.SendUserMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.SendUserMessage.displayName = 'proto.SendUserMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.WorldFullWarningMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.WorldFullWarningMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.WorldFullWarningMessage.displayName = 'proto.WorldFullWarningMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.WorldFullWarningToRoomMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.WorldFullWarningToRoomMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.WorldFullWarningToRoomMessage.displayName = 'proto.WorldFullWarningToRoomMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RefreshRoomPromptMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.RefreshRoomPromptMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RefreshRoomPromptMessage.displayName = 'proto.RefreshRoomPromptMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RefreshRoomMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.RefreshRoomMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RefreshRoomMessage.displayName = 'proto.RefreshRoomMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.WorldFullMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.WorldFullMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.WorldFullMessage.displayName = 'proto.WorldFullMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.TokenExpiredMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.TokenExpiredMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.TokenExpiredMessage.displayName = 'proto.TokenExpiredMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.InvalidTextureMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.InvalidTextureMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.InvalidTextureMessage.displayName = 'proto.InvalidTextureMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.WorldConnexionMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.WorldConnexionMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.WorldConnexionMessage.displayName = 'proto.WorldConnexionMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.BanUserMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.BanUserMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.BanUserMessage.displayName = 'proto.BanUserMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AskPositionMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AskPositionMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AskPositionMessage.displayName = 'proto.AskPositionMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ServerToClientMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ServerToClientMessage.oneofGroups_);
};
goog.inherits(proto.ServerToClientMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ServerToClientMessage.displayName = 'proto.ServerToClientMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JoinRoomMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.JoinRoomMessage.repeatedFields_, null);
};
goog.inherits(proto.JoinRoomMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JoinRoomMessage.displayName = 'proto.JoinRoomMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.UserJoinedZoneMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.UserJoinedZoneMessage.repeatedFields_, null);
};
goog.inherits(proto.UserJoinedZoneMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.UserJoinedZoneMessage.displayName = 'proto.UserJoinedZoneMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.UserLeftZoneMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.UserLeftZoneMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.UserLeftZoneMessage.displayName = 'proto.UserLeftZoneMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GroupUpdateZoneMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GroupUpdateZoneMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GroupUpdateZoneMessage.displayName = 'proto.GroupUpdateZoneMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.GroupLeftZoneMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.GroupLeftZoneMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.GroupLeftZoneMessage.displayName = 'proto.GroupLeftZoneMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PlayerDetailsUpdatedMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.PlayerDetailsUpdatedMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PlayerDetailsUpdatedMessage.displayName = 'proto.PlayerDetailsUpdatedMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.Zone = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.Zone, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.Zone.displayName = 'proto.Zone';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ZoneMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.ZoneMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ZoneMessage.displayName = 'proto.ZoneMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RoomMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.RoomMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RoomMessage.displayName = 'proto.RoomMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.PusherToBackMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.PusherToBackMessage.oneofGroups_);
};
goog.inherits(proto.PusherToBackMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.PusherToBackMessage.displayName = 'proto.PusherToBackMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.BatchToPusherMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.BatchToPusherMessage.repeatedFields_, null);
};
goog.inherits(proto.BatchToPusherMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.BatchToPusherMessage.displayName = 'proto.BatchToPusherMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SubToPusherMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.SubToPusherMessage.oneofGroups_);
};
goog.inherits(proto.SubToPusherMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.SubToPusherMessage.displayName = 'proto.SubToPusherMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.BatchToPusherRoomMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.BatchToPusherRoomMessage.repeatedFields_, null);
};
goog.inherits(proto.BatchToPusherRoomMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.BatchToPusherRoomMessage.displayName = 'proto.BatchToPusherRoomMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.SubToPusherRoomMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.SubToPusherRoomMessage.oneofGroups_);
};
goog.inherits(proto.SubToPusherRoomMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.SubToPusherRoomMessage.displayName = 'proto.SubToPusherRoomMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.UserJoinedRoomMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.UserJoinedRoomMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.UserJoinedRoomMessage.displayName = 'proto.UserJoinedRoomMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.UserLeftRoomMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.UserLeftRoomMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.UserLeftRoomMessage.displayName = 'proto.UserLeftRoomMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ServerToAdminClientMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ServerToAdminClientMessage.oneofGroups_);
};
goog.inherits(proto.ServerToAdminClientMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ServerToAdminClientMessage.displayName = 'proto.ServerToAdminClientMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AdminPusherToBackMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.AdminPusherToBackMessage.oneofGroups_);
};
goog.inherits(proto.AdminPusherToBackMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AdminPusherToBackMessage.displayName = 'proto.AdminPusherToBackMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MapStorageToBackMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.MapStorageToBackMessage.oneofGroups_);
};
goog.inherits(proto.MapStorageToBackMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MapStorageToBackMessage.displayName = 'proto.MapStorageToBackMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MapStorageRefreshMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MapStorageRefreshMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MapStorageRefreshMessage.displayName = 'proto.MapStorageRefreshMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MapStorageUrlMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MapStorageUrlMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MapStorageUrlMessage.displayName = 'proto.MapStorageUrlMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AdminMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AdminMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AdminMessage.displayName = 'proto.AdminMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AdminRoomMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AdminRoomMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AdminRoomMessage.displayName = 'proto.AdminRoomMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.AdminGlobalMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.AdminGlobalMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.AdminGlobalMessage.displayName = 'proto.AdminGlobalMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.BanMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.BanMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.BanMessage.displayName = 'proto.BanMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RoomDescription = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.RoomDescription, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RoomDescription.displayName = 'proto.RoomDescription';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.RoomsList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.RoomsList.repeatedFields_, null);
};
goog.inherits(proto.RoomsList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.RoomsList.displayName = 'proto.RoomsList';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.EmptyMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.EmptyMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.EmptyMessage.displayName = 'proto.EmptyMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.ChatMessagePrompt = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.ChatMessagePrompt.oneofGroups_);
};
goog.inherits(proto.ChatMessagePrompt, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.ChatMessagePrompt.displayName = 'proto.ChatMessagePrompt';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.JoinMucRoomMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.JoinMucRoomMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.JoinMucRoomMessage.displayName = 'proto.JoinMucRoomMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.LeaveMucRoomMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.LeaveMucRoomMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.LeaveMucRoomMessage.displayName = 'proto.LeaveMucRoomMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.MucRoomDefinitionMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.MucRoomDefinitionMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.MucRoomDefinitionMessage.displayName = 'proto.MucRoomDefinitionMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.XmppSettingsMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.XmppSettingsMessage.repeatedFields_, null);
};
goog.inherits(proto.XmppSettingsMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.XmppSettingsMessage.displayName = 'proto.XmppSettingsMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.BanUserByUuidMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.BanUserByUuidMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.BanUserByUuidMessage.displayName = 'proto.BanUserByUuidMessage';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PositionMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.PositionMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PositionMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PositionMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    x: jspb.Message.getFieldWithDefault(msg, 1, 0),
    y: jspb.Message.getFieldWithDefault(msg, 2, 0),
    direction: jspb.Message.getFieldWithDefault(msg, 3, 0),
    moving: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PositionMessage}
 */
proto.PositionMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PositionMessage;
  return proto.PositionMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PositionMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PositionMessage}
 */
proto.PositionMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setX(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setY(value);
      break;
    case 3:
      var value = /** @type {!proto.PositionMessage.Direction} */ (reader.readEnum());
      msg.setDirection(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMoving(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PositionMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PositionMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PositionMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PositionMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getX();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getY();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getDirection();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getMoving();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.PositionMessage.Direction = {
  UP: 0,
  RIGHT: 1,
  DOWN: 2,
  LEFT: 3
};

/**
 * optional int32 x = 1;
 * @return {number}
 */
proto.PositionMessage.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.PositionMessage} returns this
 */
proto.PositionMessage.prototype.setX = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 y = 2;
 * @return {number}
 */
proto.PositionMessage.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.PositionMessage} returns this
 */
proto.PositionMessage.prototype.setY = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional Direction direction = 3;
 * @return {!proto.PositionMessage.Direction}
 */
proto.PositionMessage.prototype.getDirection = function() {
  return /** @type {!proto.PositionMessage.Direction} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.PositionMessage.Direction} value
 * @return {!proto.PositionMessage} returns this
 */
proto.PositionMessage.prototype.setDirection = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional bool moving = 4;
 * @return {boolean}
 */
proto.PositionMessage.prototype.getMoving = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.PositionMessage} returns this
 */
proto.PositionMessage.prototype.setMoving = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PointMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.PointMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PointMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PointMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    x: jspb.Message.getFieldWithDefault(msg, 1, 0),
    y: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PointMessage}
 */
proto.PointMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PointMessage;
  return proto.PointMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PointMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PointMessage}
 */
proto.PointMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setX(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setY(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PointMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PointMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PointMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PointMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getX();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getY();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 x = 1;
 * @return {number}
 */
proto.PointMessage.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.PointMessage} returns this
 */
proto.PointMessage.prototype.setX = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 y = 2;
 * @return {number}
 */
proto.PointMessage.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.PointMessage} returns this
 */
proto.PointMessage.prototype.setY = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ViewportMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.ViewportMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ViewportMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ViewportMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    left: jspb.Message.getFieldWithDefault(msg, 1, 0),
    top: jspb.Message.getFieldWithDefault(msg, 2, 0),
    right: jspb.Message.getFieldWithDefault(msg, 3, 0),
    bottom: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ViewportMessage}
 */
proto.ViewportMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ViewportMessage;
  return proto.ViewportMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ViewportMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ViewportMessage}
 */
proto.ViewportMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLeft(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTop(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRight(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBottom(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ViewportMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ViewportMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ViewportMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ViewportMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLeft();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getTop();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getRight();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getBottom();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional int32 left = 1;
 * @return {number}
 */
proto.ViewportMessage.prototype.getLeft = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ViewportMessage} returns this
 */
proto.ViewportMessage.prototype.setLeft = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 top = 2;
 * @return {number}
 */
proto.ViewportMessage.prototype.getTop = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ViewportMessage} returns this
 */
proto.ViewportMessage.prototype.setTop = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 right = 3;
 * @return {number}
 */
proto.ViewportMessage.prototype.getRight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ViewportMessage} returns this
 */
proto.ViewportMessage.prototype.setRight = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 bottom = 4;
 * @return {number}
 */
proto.ViewportMessage.prototype.getBottom = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.ViewportMessage} returns this
 */
proto.ViewportMessage.prototype.setBottom = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CharacterLayerMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.CharacterLayerMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CharacterLayerMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CharacterLayerMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    layer: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CharacterLayerMessage}
 */
proto.CharacterLayerMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CharacterLayerMessage;
  return proto.CharacterLayerMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CharacterLayerMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CharacterLayerMessage}
 */
proto.CharacterLayerMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLayer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CharacterLayerMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.CharacterLayerMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.CharacterLayerMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CharacterLayerMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLayer();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.CharacterLayerMessage.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.CharacterLayerMessage} returns this
 */
proto.CharacterLayerMessage.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.CharacterLayerMessage.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.CharacterLayerMessage} returns this
 */
proto.CharacterLayerMessage.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string layer = 3;
 * @return {string}
 */
proto.CharacterLayerMessage.prototype.getLayer = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.CharacterLayerMessage} returns this
 */
proto.CharacterLayerMessage.prototype.setLayer = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ApplicationMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.ApplicationMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ApplicationMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ApplicationMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    script: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ApplicationMessage}
 */
proto.ApplicationMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ApplicationMessage;
  return proto.ApplicationMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ApplicationMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ApplicationMessage}
 */
proto.ApplicationMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setScript(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ApplicationMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ApplicationMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ApplicationMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ApplicationMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getScript();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.ApplicationMessage.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ApplicationMessage} returns this
 */
proto.ApplicationMessage.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string script = 2;
 * @return {string}
 */
proto.ApplicationMessage.prototype.getScript = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ApplicationMessage} returns this
 */
proto.ApplicationMessage.prototype.setScript = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CompanionMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.CompanionMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CompanionMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CompanionMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CompanionMessage}
 */
proto.CompanionMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CompanionMessage;
  return proto.CompanionMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CompanionMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CompanionMessage}
 */
proto.CompanionMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CompanionMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.CompanionMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.CompanionMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CompanionMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.CompanionMessage.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.CompanionMessage} returns this
 */
proto.CompanionMessage.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PingMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.PingMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PingMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PingMessage.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PingMessage}
 */
proto.PingMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PingMessage;
  return proto.PingMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PingMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PingMessage}
 */
proto.PingMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PingMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PingMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PingMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PingMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.UpdateMapToNewestMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.UpdateMapToNewestMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.UpdateMapToNewestMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UpdateMapToNewestMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    commandid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.UpdateMapToNewestMessage}
 */
proto.UpdateMapToNewestMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.UpdateMapToNewestMessage;
  return proto.UpdateMapToNewestMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.UpdateMapToNewestMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.UpdateMapToNewestMessage}
 */
proto.UpdateMapToNewestMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCommandid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.UpdateMapToNewestMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.UpdateMapToNewestMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.UpdateMapToNewestMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UpdateMapToNewestMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommandid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string commandId = 1;
 * @return {string}
 */
proto.UpdateMapToNewestMessage.prototype.getCommandid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.UpdateMapToNewestMessage} returns this
 */
proto.UpdateMapToNewestMessage.prototype.setCommandid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.UpdateMapToNewestWithKeyMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.UpdateMapToNewestWithKeyMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.UpdateMapToNewestWithKeyMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UpdateMapToNewestWithKeyMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    mapkey: jspb.Message.getFieldWithDefault(msg, 1, ""),
    updatemaptonewestmessage: (f = msg.getUpdatemaptonewestmessage()) && proto.UpdateMapToNewestMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.UpdateMapToNewestWithKeyMessage}
 */
proto.UpdateMapToNewestWithKeyMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.UpdateMapToNewestWithKeyMessage;
  return proto.UpdateMapToNewestWithKeyMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.UpdateMapToNewestWithKeyMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.UpdateMapToNewestWithKeyMessage}
 */
proto.UpdateMapToNewestWithKeyMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMapkey(value);
      break;
    case 2:
      var value = new proto.UpdateMapToNewestMessage;
      reader.readMessage(value,proto.UpdateMapToNewestMessage.deserializeBinaryFromReader);
      msg.setUpdatemaptonewestmessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.UpdateMapToNewestWithKeyMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.UpdateMapToNewestWithKeyMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.UpdateMapToNewestWithKeyMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UpdateMapToNewestWithKeyMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMapkey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUpdatemaptonewestmessage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.UpdateMapToNewestMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional string mapKey = 1;
 * @return {string}
 */
proto.UpdateMapToNewestWithKeyMessage.prototype.getMapkey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.UpdateMapToNewestWithKeyMessage} returns this
 */
proto.UpdateMapToNewestWithKeyMessage.prototype.setMapkey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional UpdateMapToNewestMessage updateMapToNewestMessage = 2;
 * @return {?proto.UpdateMapToNewestMessage}
 */
proto.UpdateMapToNewestWithKeyMessage.prototype.getUpdatemaptonewestmessage = function() {
  return /** @type{?proto.UpdateMapToNewestMessage} */ (
    jspb.Message.getWrapperField(this, proto.UpdateMapToNewestMessage, 2));
};


/**
 * @param {?proto.UpdateMapToNewestMessage|undefined} value
 * @return {!proto.UpdateMapToNewestWithKeyMessage} returns this
*/
proto.UpdateMapToNewestWithKeyMessage.prototype.setUpdatemaptonewestmessage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.UpdateMapToNewestWithKeyMessage} returns this
 */
proto.UpdateMapToNewestWithKeyMessage.prototype.clearUpdatemaptonewestmessage = function() {
  return this.setUpdatemaptonewestmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.UpdateMapToNewestWithKeyMessage.prototype.hasUpdatemaptonewestmessage = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SetPlayerDetailsMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.SetPlayerDetailsMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SetPlayerDetailsMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SetPlayerDetailsMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    outlinecolor: (f = msg.getOutlinecolor()) && google_protobuf_wrappers_pb.UInt32Value.toObject(includeInstance, f),
    removeoutlinecolor: (f = msg.getRemoveoutlinecolor()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    showvoiceindicator: (f = msg.getShowvoiceindicator()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    availabilitystatus: jspb.Message.getFieldWithDefault(msg, 6, 0),
    setvariable: (f = msg.getSetvariable()) && proto.SetPlayerVariableMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SetPlayerDetailsMessage}
 */
proto.SetPlayerDetailsMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SetPlayerDetailsMessage;
  return proto.SetPlayerDetailsMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SetPlayerDetailsMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SetPlayerDetailsMessage}
 */
proto.SetPlayerDetailsMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = new google_protobuf_wrappers_pb.UInt32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.UInt32Value.deserializeBinaryFromReader);
      msg.setOutlinecolor(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setRemoveoutlinecolor(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setShowvoiceindicator(value);
      break;
    case 6:
      var value = /** @type {!proto.AvailabilityStatus} */ (reader.readEnum());
      msg.setAvailabilitystatus(value);
      break;
    case 7:
      var value = new proto.SetPlayerVariableMessage;
      reader.readMessage(value,proto.SetPlayerVariableMessage.deserializeBinaryFromReader);
      msg.setSetvariable(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SetPlayerDetailsMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SetPlayerDetailsMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SetPlayerDetailsMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SetPlayerDetailsMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOutlinecolor();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.UInt32Value.serializeBinaryToWriter
    );
  }
  f = message.getRemoveoutlinecolor();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getShowvoiceindicator();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getAvailabilitystatus();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
  f = message.getSetvariable();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.SetPlayerVariableMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.UInt32Value outlineColor = 3;
 * @return {?proto.google.protobuf.UInt32Value}
 */
proto.SetPlayerDetailsMessage.prototype.getOutlinecolor = function() {
  return /** @type{?proto.google.protobuf.UInt32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.UInt32Value, 3));
};


/**
 * @param {?proto.google.protobuf.UInt32Value|undefined} value
 * @return {!proto.SetPlayerDetailsMessage} returns this
*/
proto.SetPlayerDetailsMessage.prototype.setOutlinecolor = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.SetPlayerDetailsMessage} returns this
 */
proto.SetPlayerDetailsMessage.prototype.clearOutlinecolor = function() {
  return this.setOutlinecolor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SetPlayerDetailsMessage.prototype.hasOutlinecolor = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.BoolValue removeOutlineColor = 4;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.SetPlayerDetailsMessage.prototype.getRemoveoutlinecolor = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 4));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.SetPlayerDetailsMessage} returns this
*/
proto.SetPlayerDetailsMessage.prototype.setRemoveoutlinecolor = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.SetPlayerDetailsMessage} returns this
 */
proto.SetPlayerDetailsMessage.prototype.clearRemoveoutlinecolor = function() {
  return this.setRemoveoutlinecolor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SetPlayerDetailsMessage.prototype.hasRemoveoutlinecolor = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.BoolValue showVoiceIndicator = 5;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.SetPlayerDetailsMessage.prototype.getShowvoiceindicator = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 5));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.SetPlayerDetailsMessage} returns this
*/
proto.SetPlayerDetailsMessage.prototype.setShowvoiceindicator = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.SetPlayerDetailsMessage} returns this
 */
proto.SetPlayerDetailsMessage.prototype.clearShowvoiceindicator = function() {
  return this.setShowvoiceindicator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SetPlayerDetailsMessage.prototype.hasShowvoiceindicator = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional AvailabilityStatus availabilityStatus = 6;
 * @return {!proto.AvailabilityStatus}
 */
proto.SetPlayerDetailsMessage.prototype.getAvailabilitystatus = function() {
  return /** @type {!proto.AvailabilityStatus} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.AvailabilityStatus} value
 * @return {!proto.SetPlayerDetailsMessage} returns this
 */
proto.SetPlayerDetailsMessage.prototype.setAvailabilitystatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional SetPlayerVariableMessage setVariable = 7;
 * @return {?proto.SetPlayerVariableMessage}
 */
proto.SetPlayerDetailsMessage.prototype.getSetvariable = function() {
  return /** @type{?proto.SetPlayerVariableMessage} */ (
    jspb.Message.getWrapperField(this, proto.SetPlayerVariableMessage, 7));
};


/**
 * @param {?proto.SetPlayerVariableMessage|undefined} value
 * @return {!proto.SetPlayerDetailsMessage} returns this
*/
proto.SetPlayerDetailsMessage.prototype.setSetvariable = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.SetPlayerDetailsMessage} returns this
 */
proto.SetPlayerDetailsMessage.prototype.clearSetvariable = function() {
  return this.setSetvariable(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SetPlayerDetailsMessage.prototype.hasSetvariable = function() {
  return jspb.Message.getField(this, 7) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.UserMovesMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.UserMovesMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.UserMovesMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UserMovesMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    position: (f = msg.getPosition()) && proto.PositionMessage.toObject(includeInstance, f),
    viewport: (f = msg.getViewport()) && proto.ViewportMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.UserMovesMessage}
 */
proto.UserMovesMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.UserMovesMessage;
  return proto.UserMovesMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.UserMovesMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.UserMovesMessage}
 */
proto.UserMovesMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.PositionMessage;
      reader.readMessage(value,proto.PositionMessage.deserializeBinaryFromReader);
      msg.setPosition(value);
      break;
    case 2:
      var value = new proto.ViewportMessage;
      reader.readMessage(value,proto.ViewportMessage.deserializeBinaryFromReader);
      msg.setViewport(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.UserMovesMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.UserMovesMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.UserMovesMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UserMovesMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.PositionMessage.serializeBinaryToWriter
    );
  }
  f = message.getViewport();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ViewportMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional PositionMessage position = 1;
 * @return {?proto.PositionMessage}
 */
proto.UserMovesMessage.prototype.getPosition = function() {
  return /** @type{?proto.PositionMessage} */ (
    jspb.Message.getWrapperField(this, proto.PositionMessage, 1));
};


/**
 * @param {?proto.PositionMessage|undefined} value
 * @return {!proto.UserMovesMessage} returns this
*/
proto.UserMovesMessage.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.UserMovesMessage} returns this
 */
proto.UserMovesMessage.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.UserMovesMessage.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ViewportMessage viewport = 2;
 * @return {?proto.ViewportMessage}
 */
proto.UserMovesMessage.prototype.getViewport = function() {
  return /** @type{?proto.ViewportMessage} */ (
    jspb.Message.getWrapperField(this, proto.ViewportMessage, 2));
};


/**
 * @param {?proto.ViewportMessage|undefined} value
 * @return {!proto.UserMovesMessage} returns this
*/
proto.UserMovesMessage.prototype.setViewport = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.UserMovesMessage} returns this
 */
proto.UserMovesMessage.prototype.clearViewport = function() {
  return this.setViewport(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.UserMovesMessage.prototype.hasViewport = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.WebRtcSignalToServerMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.WebRtcSignalToServerMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.WebRtcSignalToServerMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.WebRtcSignalToServerMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    receiverid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    signal: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.WebRtcSignalToServerMessage}
 */
proto.WebRtcSignalToServerMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.WebRtcSignalToServerMessage;
  return proto.WebRtcSignalToServerMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.WebRtcSignalToServerMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.WebRtcSignalToServerMessage}
 */
proto.WebRtcSignalToServerMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setReceiverid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSignal(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.WebRtcSignalToServerMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.WebRtcSignalToServerMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.WebRtcSignalToServerMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.WebRtcSignalToServerMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReceiverid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getSignal();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 receiverId = 1;
 * @return {number}
 */
proto.WebRtcSignalToServerMessage.prototype.getReceiverid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.WebRtcSignalToServerMessage} returns this
 */
proto.WebRtcSignalToServerMessage.prototype.setReceiverid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string signal = 2;
 * @return {string}
 */
proto.WebRtcSignalToServerMessage.prototype.getSignal = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.WebRtcSignalToServerMessage} returns this
 */
proto.WebRtcSignalToServerMessage.prototype.setSignal = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ReportPlayerMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.ReportPlayerMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ReportPlayerMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ReportPlayerMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    reporteduseruuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    reportcomment: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ReportPlayerMessage}
 */
proto.ReportPlayerMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ReportPlayerMessage;
  return proto.ReportPlayerMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ReportPlayerMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ReportPlayerMessage}
 */
proto.ReportPlayerMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setReporteduseruuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setReportcomment(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ReportPlayerMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ReportPlayerMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ReportPlayerMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ReportPlayerMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReporteduseruuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getReportcomment();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string reportedUserUuid = 1;
 * @return {string}
 */
proto.ReportPlayerMessage.prototype.getReporteduseruuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ReportPlayerMessage} returns this
 */
proto.ReportPlayerMessage.prototype.setReporteduseruuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string reportComment = 2;
 * @return {string}
 */
proto.ReportPlayerMessage.prototype.getReportcomment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ReportPlayerMessage} returns this
 */
proto.ReportPlayerMessage.prototype.setReportcomment = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.EmotePromptMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.EmotePromptMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.EmotePromptMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.EmotePromptMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    emote: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.EmotePromptMessage}
 */
proto.EmotePromptMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.EmotePromptMessage;
  return proto.EmotePromptMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.EmotePromptMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.EmotePromptMessage}
 */
proto.EmotePromptMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmote(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.EmotePromptMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.EmotePromptMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.EmotePromptMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.EmotePromptMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmote();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string emote = 2;
 * @return {string}
 */
proto.EmotePromptMessage.prototype.getEmote = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.EmotePromptMessage} returns this
 */
proto.EmotePromptMessage.prototype.setEmote = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.EmoteEventMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.EmoteEventMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.EmoteEventMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.EmoteEventMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    actoruserid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    emote: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.EmoteEventMessage}
 */
proto.EmoteEventMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.EmoteEventMessage;
  return proto.EmoteEventMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.EmoteEventMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.EmoteEventMessage}
 */
proto.EmoteEventMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setActoruserid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmote(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.EmoteEventMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.EmoteEventMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.EmoteEventMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.EmoteEventMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActoruserid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getEmote();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 actorUserId = 1;
 * @return {number}
 */
proto.EmoteEventMessage.prototype.getActoruserid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.EmoteEventMessage} returns this
 */
proto.EmoteEventMessage.prototype.setActoruserid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string emote = 2;
 * @return {string}
 */
proto.EmoteEventMessage.prototype.getEmote = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.EmoteEventMessage} returns this
 */
proto.EmoteEventMessage.prototype.setEmote = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.FollowRequestMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.FollowRequestMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.FollowRequestMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FollowRequestMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    leader: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.FollowRequestMessage}
 */
proto.FollowRequestMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.FollowRequestMessage;
  return proto.FollowRequestMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.FollowRequestMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.FollowRequestMessage}
 */
proto.FollowRequestMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLeader(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.FollowRequestMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.FollowRequestMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.FollowRequestMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FollowRequestMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLeader();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 leader = 1;
 * @return {number}
 */
proto.FollowRequestMessage.prototype.getLeader = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.FollowRequestMessage} returns this
 */
proto.FollowRequestMessage.prototype.setLeader = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.FollowConfirmationMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.FollowConfirmationMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.FollowConfirmationMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FollowConfirmationMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    leader: jspb.Message.getFieldWithDefault(msg, 1, 0),
    follower: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.FollowConfirmationMessage}
 */
proto.FollowConfirmationMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.FollowConfirmationMessage;
  return proto.FollowConfirmationMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.FollowConfirmationMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.FollowConfirmationMessage}
 */
proto.FollowConfirmationMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLeader(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFollower(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.FollowConfirmationMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.FollowConfirmationMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.FollowConfirmationMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FollowConfirmationMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLeader();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getFollower();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 leader = 1;
 * @return {number}
 */
proto.FollowConfirmationMessage.prototype.getLeader = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.FollowConfirmationMessage} returns this
 */
proto.FollowConfirmationMessage.prototype.setLeader = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 follower = 2;
 * @return {number}
 */
proto.FollowConfirmationMessage.prototype.getFollower = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.FollowConfirmationMessage} returns this
 */
proto.FollowConfirmationMessage.prototype.setFollower = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.FollowAbortMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.FollowAbortMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.FollowAbortMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FollowAbortMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    leader: jspb.Message.getFieldWithDefault(msg, 1, 0),
    follower: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.FollowAbortMessage}
 */
proto.FollowAbortMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.FollowAbortMessage;
  return proto.FollowAbortMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.FollowAbortMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.FollowAbortMessage}
 */
proto.FollowAbortMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLeader(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFollower(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.FollowAbortMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.FollowAbortMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.FollowAbortMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.FollowAbortMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLeader();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getFollower();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 leader = 1;
 * @return {number}
 */
proto.FollowAbortMessage.prototype.getLeader = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.FollowAbortMessage} returns this
 */
proto.FollowAbortMessage.prototype.setLeader = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 follower = 2;
 * @return {number}
 */
proto.FollowAbortMessage.prototype.getFollower = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.FollowAbortMessage} returns this
 */
proto.FollowAbortMessage.prototype.setFollower = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.LockGroupPromptMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.LockGroupPromptMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.LockGroupPromptMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.LockGroupPromptMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    lock: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.LockGroupPromptMessage}
 */
proto.LockGroupPromptMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.LockGroupPromptMessage;
  return proto.LockGroupPromptMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.LockGroupPromptMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.LockGroupPromptMessage}
 */
proto.LockGroupPromptMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLock(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.LockGroupPromptMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.LockGroupPromptMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.LockGroupPromptMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.LockGroupPromptMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLock();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool lock = 1;
 * @return {boolean}
 */
proto.LockGroupPromptMessage.prototype.getLock = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.LockGroupPromptMessage} returns this
 */
proto.LockGroupPromptMessage.prototype.setLock = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.EditMapMessage.oneofGroups_ = [[1,2,3,4,5,6]];

/**
 * @enum {number}
 */
proto.EditMapMessage.MessageCase = {
  MESSAGE_NOT_SET: 0,
  MODIFYAREAMESSAGE: 1,
  CREATEAREAMESSAGE: 2,
  DELETEAREAMESSAGE: 3,
  MODIFYENTITYMESSAGE: 4,
  CREATEENTITYMESSAGE: 5,
  DELETEENTITYMESSAGE: 6
};

/**
 * @return {proto.EditMapMessage.MessageCase}
 */
proto.EditMapMessage.prototype.getMessageCase = function() {
  return /** @type {proto.EditMapMessage.MessageCase} */(jspb.Message.computeOneofCase(this, proto.EditMapMessage.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.EditMapMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.EditMapMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.EditMapMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.EditMapMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    modifyareamessage: (f = msg.getModifyareamessage()) && proto.ModifyAreaMessage.toObject(includeInstance, f),
    createareamessage: (f = msg.getCreateareamessage()) && proto.CreateAreaMessage.toObject(includeInstance, f),
    deleteareamessage: (f = msg.getDeleteareamessage()) && proto.DeleteAreaMessage.toObject(includeInstance, f),
    modifyentitymessage: (f = msg.getModifyentitymessage()) && proto.ModifyEntityMessage.toObject(includeInstance, f),
    createentitymessage: (f = msg.getCreateentitymessage()) && proto.CreateEntityMessage.toObject(includeInstance, f),
    deleteentitymessage: (f = msg.getDeleteentitymessage()) && proto.DeleteEntityMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.EditMapMessage}
 */
proto.EditMapMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.EditMapMessage;
  return proto.EditMapMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.EditMapMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.EditMapMessage}
 */
proto.EditMapMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.ModifyAreaMessage;
      reader.readMessage(value,proto.ModifyAreaMessage.deserializeBinaryFromReader);
      msg.setModifyareamessage(value);
      break;
    case 2:
      var value = new proto.CreateAreaMessage;
      reader.readMessage(value,proto.CreateAreaMessage.deserializeBinaryFromReader);
      msg.setCreateareamessage(value);
      break;
    case 3:
      var value = new proto.DeleteAreaMessage;
      reader.readMessage(value,proto.DeleteAreaMessage.deserializeBinaryFromReader);
      msg.setDeleteareamessage(value);
      break;
    case 4:
      var value = new proto.ModifyEntityMessage;
      reader.readMessage(value,proto.ModifyEntityMessage.deserializeBinaryFromReader);
      msg.setModifyentitymessage(value);
      break;
    case 5:
      var value = new proto.CreateEntityMessage;
      reader.readMessage(value,proto.CreateEntityMessage.deserializeBinaryFromReader);
      msg.setCreateentitymessage(value);
      break;
    case 6:
      var value = new proto.DeleteEntityMessage;
      reader.readMessage(value,proto.DeleteEntityMessage.deserializeBinaryFromReader);
      msg.setDeleteentitymessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.EditMapMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.EditMapMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.EditMapMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.EditMapMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModifyareamessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.ModifyAreaMessage.serializeBinaryToWriter
    );
  }
  f = message.getCreateareamessage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.CreateAreaMessage.serializeBinaryToWriter
    );
  }
  f = message.getDeleteareamessage();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.DeleteAreaMessage.serializeBinaryToWriter
    );
  }
  f = message.getModifyentitymessage();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.ModifyEntityMessage.serializeBinaryToWriter
    );
  }
  f = message.getCreateentitymessage();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.CreateEntityMessage.serializeBinaryToWriter
    );
  }
  f = message.getDeleteentitymessage();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.DeleteEntityMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional ModifyAreaMessage modifyAreaMessage = 1;
 * @return {?proto.ModifyAreaMessage}
 */
proto.EditMapMessage.prototype.getModifyareamessage = function() {
  return /** @type{?proto.ModifyAreaMessage} */ (
    jspb.Message.getWrapperField(this, proto.ModifyAreaMessage, 1));
};


/**
 * @param {?proto.ModifyAreaMessage|undefined} value
 * @return {!proto.EditMapMessage} returns this
*/
proto.EditMapMessage.prototype.setModifyareamessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.EditMapMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.EditMapMessage} returns this
 */
proto.EditMapMessage.prototype.clearModifyareamessage = function() {
  return this.setModifyareamessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.EditMapMessage.prototype.hasModifyareamessage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CreateAreaMessage createAreaMessage = 2;
 * @return {?proto.CreateAreaMessage}
 */
proto.EditMapMessage.prototype.getCreateareamessage = function() {
  return /** @type{?proto.CreateAreaMessage} */ (
    jspb.Message.getWrapperField(this, proto.CreateAreaMessage, 2));
};


/**
 * @param {?proto.CreateAreaMessage|undefined} value
 * @return {!proto.EditMapMessage} returns this
*/
proto.EditMapMessage.prototype.setCreateareamessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.EditMapMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.EditMapMessage} returns this
 */
proto.EditMapMessage.prototype.clearCreateareamessage = function() {
  return this.setCreateareamessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.EditMapMessage.prototype.hasCreateareamessage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional DeleteAreaMessage deleteAreaMessage = 3;
 * @return {?proto.DeleteAreaMessage}
 */
proto.EditMapMessage.prototype.getDeleteareamessage = function() {
  return /** @type{?proto.DeleteAreaMessage} */ (
    jspb.Message.getWrapperField(this, proto.DeleteAreaMessage, 3));
};


/**
 * @param {?proto.DeleteAreaMessage|undefined} value
 * @return {!proto.EditMapMessage} returns this
*/
proto.EditMapMessage.prototype.setDeleteareamessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.EditMapMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.EditMapMessage} returns this
 */
proto.EditMapMessage.prototype.clearDeleteareamessage = function() {
  return this.setDeleteareamessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.EditMapMessage.prototype.hasDeleteareamessage = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ModifyEntityMessage modifyEntityMessage = 4;
 * @return {?proto.ModifyEntityMessage}
 */
proto.EditMapMessage.prototype.getModifyentitymessage = function() {
  return /** @type{?proto.ModifyEntityMessage} */ (
    jspb.Message.getWrapperField(this, proto.ModifyEntityMessage, 4));
};


/**
 * @param {?proto.ModifyEntityMessage|undefined} value
 * @return {!proto.EditMapMessage} returns this
*/
proto.EditMapMessage.prototype.setModifyentitymessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.EditMapMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.EditMapMessage} returns this
 */
proto.EditMapMessage.prototype.clearModifyentitymessage = function() {
  return this.setModifyentitymessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.EditMapMessage.prototype.hasModifyentitymessage = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional CreateEntityMessage createEntityMessage = 5;
 * @return {?proto.CreateEntityMessage}
 */
proto.EditMapMessage.prototype.getCreateentitymessage = function() {
  return /** @type{?proto.CreateEntityMessage} */ (
    jspb.Message.getWrapperField(this, proto.CreateEntityMessage, 5));
};


/**
 * @param {?proto.CreateEntityMessage|undefined} value
 * @return {!proto.EditMapMessage} returns this
*/
proto.EditMapMessage.prototype.setCreateentitymessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.EditMapMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.EditMapMessage} returns this
 */
proto.EditMapMessage.prototype.clearCreateentitymessage = function() {
  return this.setCreateentitymessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.EditMapMessage.prototype.hasCreateentitymessage = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional DeleteEntityMessage deleteEntityMessage = 6;
 * @return {?proto.DeleteEntityMessage}
 */
proto.EditMapMessage.prototype.getDeleteentitymessage = function() {
  return /** @type{?proto.DeleteEntityMessage} */ (
    jspb.Message.getWrapperField(this, proto.DeleteEntityMessage, 6));
};


/**
 * @param {?proto.DeleteEntityMessage|undefined} value
 * @return {!proto.EditMapMessage} returns this
*/
proto.EditMapMessage.prototype.setDeleteentitymessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.EditMapMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.EditMapMessage} returns this
 */
proto.EditMapMessage.prototype.clearDeleteentitymessage = function() {
  return this.setDeleteentitymessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.EditMapMessage.prototype.hasDeleteentitymessage = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.EditMapCommandMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.EditMapCommandMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.EditMapCommandMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.EditMapCommandMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    editmapmessage: (f = msg.getEditmapmessage()) && proto.EditMapMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.EditMapCommandMessage}
 */
proto.EditMapCommandMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.EditMapCommandMessage;
  return proto.EditMapCommandMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.EditMapCommandMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.EditMapCommandMessage}
 */
proto.EditMapCommandMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.EditMapMessage;
      reader.readMessage(value,proto.EditMapMessage.deserializeBinaryFromReader);
      msg.setEditmapmessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.EditMapCommandMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.EditMapCommandMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.EditMapCommandMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.EditMapCommandMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEditmapmessage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.EditMapMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.EditMapCommandMessage.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.EditMapCommandMessage} returns this
 */
proto.EditMapCommandMessage.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional EditMapMessage editMapMessage = 2;
 * @return {?proto.EditMapMessage}
 */
proto.EditMapCommandMessage.prototype.getEditmapmessage = function() {
  return /** @type{?proto.EditMapMessage} */ (
    jspb.Message.getWrapperField(this, proto.EditMapMessage, 2));
};


/**
 * @param {?proto.EditMapMessage|undefined} value
 * @return {!proto.EditMapCommandMessage} returns this
*/
proto.EditMapCommandMessage.prototype.setEditmapmessage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.EditMapCommandMessage} returns this
 */
proto.EditMapCommandMessage.prototype.clearEditmapmessage = function() {
  return this.setEditmapmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.EditMapCommandMessage.prototype.hasEditmapmessage = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.EditMapCommandsArrayMessage.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.EditMapCommandsArrayMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.EditMapCommandsArrayMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.EditMapCommandsArrayMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.EditMapCommandsArrayMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    editmapcommandsList: jspb.Message.toObjectList(msg.getEditmapcommandsList(),
    proto.EditMapCommandMessage.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.EditMapCommandsArrayMessage}
 */
proto.EditMapCommandsArrayMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.EditMapCommandsArrayMessage;
  return proto.EditMapCommandsArrayMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.EditMapCommandsArrayMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.EditMapCommandsArrayMessage}
 */
proto.EditMapCommandsArrayMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.EditMapCommandMessage;
      reader.readMessage(value,proto.EditMapCommandMessage.deserializeBinaryFromReader);
      msg.addEditmapcommands(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.EditMapCommandsArrayMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.EditMapCommandsArrayMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.EditMapCommandsArrayMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.EditMapCommandsArrayMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEditmapcommandsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.EditMapCommandMessage.serializeBinaryToWriter
    );
  }
};


/**
 * repeated EditMapCommandMessage editMapCommands = 1;
 * @return {!Array<!proto.EditMapCommandMessage>}
 */
proto.EditMapCommandsArrayMessage.prototype.getEditmapcommandsList = function() {
  return /** @type{!Array<!proto.EditMapCommandMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.EditMapCommandMessage, 1));
};


/**
 * @param {!Array<!proto.EditMapCommandMessage>} value
 * @return {!proto.EditMapCommandsArrayMessage} returns this
*/
proto.EditMapCommandsArrayMessage.prototype.setEditmapcommandsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.EditMapCommandMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.EditMapCommandMessage}
 */
proto.EditMapCommandsArrayMessage.prototype.addEditmapcommands = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.EditMapCommandMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.EditMapCommandsArrayMessage} returns this
 */
proto.EditMapCommandsArrayMessage.prototype.clearEditmapcommandsList = function() {
  return this.setEditmapcommandsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.EditMapCommandWithKeyMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.EditMapCommandWithKeyMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.EditMapCommandWithKeyMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.EditMapCommandWithKeyMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    mapkey: jspb.Message.getFieldWithDefault(msg, 1, ""),
    editmapcommandmessage: (f = msg.getEditmapcommandmessage()) && proto.EditMapCommandMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.EditMapCommandWithKeyMessage}
 */
proto.EditMapCommandWithKeyMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.EditMapCommandWithKeyMessage;
  return proto.EditMapCommandWithKeyMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.EditMapCommandWithKeyMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.EditMapCommandWithKeyMessage}
 */
proto.EditMapCommandWithKeyMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMapkey(value);
      break;
    case 2:
      var value = new proto.EditMapCommandMessage;
      reader.readMessage(value,proto.EditMapCommandMessage.deserializeBinaryFromReader);
      msg.setEditmapcommandmessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.EditMapCommandWithKeyMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.EditMapCommandWithKeyMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.EditMapCommandWithKeyMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.EditMapCommandWithKeyMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMapkey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEditmapcommandmessage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.EditMapCommandMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional string mapKey = 1;
 * @return {string}
 */
proto.EditMapCommandWithKeyMessage.prototype.getMapkey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.EditMapCommandWithKeyMessage} returns this
 */
proto.EditMapCommandWithKeyMessage.prototype.setMapkey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional EditMapCommandMessage editMapCommandMessage = 2;
 * @return {?proto.EditMapCommandMessage}
 */
proto.EditMapCommandWithKeyMessage.prototype.getEditmapcommandmessage = function() {
  return /** @type{?proto.EditMapCommandMessage} */ (
    jspb.Message.getWrapperField(this, proto.EditMapCommandMessage, 2));
};


/**
 * @param {?proto.EditMapCommandMessage|undefined} value
 * @return {!proto.EditMapCommandWithKeyMessage} returns this
*/
proto.EditMapCommandWithKeyMessage.prototype.setEditmapcommandmessage = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.EditMapCommandWithKeyMessage} returns this
 */
proto.EditMapCommandWithKeyMessage.prototype.clearEditmapcommandmessage = function() {
  return this.setEditmapcommandmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.EditMapCommandWithKeyMessage.prototype.hasEditmapcommandmessage = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ModifyAreaMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.ModifyAreaMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ModifyAreaMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ModifyAreaMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    x: jspb.Message.getFieldWithDefault(msg, 3, 0),
    y: jspb.Message.getFieldWithDefault(msg, 4, 0),
    width: jspb.Message.getFieldWithDefault(msg, 5, 0),
    height: jspb.Message.getFieldWithDefault(msg, 6, 0),
    properties: (f = msg.getProperties()) && proto.AreaProperties.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ModifyAreaMessage}
 */
proto.ModifyAreaMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ModifyAreaMessage;
  return proto.ModifyAreaMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ModifyAreaMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ModifyAreaMessage}
 */
proto.ModifyAreaMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setX(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setY(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setWidth(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHeight(value);
      break;
    case 7:
      var value = new proto.AreaProperties;
      reader.readMessage(value,proto.AreaProperties.deserializeBinaryFromReader);
      msg.setProperties(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ModifyAreaMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ModifyAreaMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ModifyAreaMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ModifyAreaMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeUint32(
      6,
      f
    );
  }
  f = message.getProperties();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.AreaProperties.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.ModifyAreaMessage.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ModifyAreaMessage} returns this
 */
proto.ModifyAreaMessage.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.ModifyAreaMessage.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ModifyAreaMessage} returns this
 */
proto.ModifyAreaMessage.prototype.setName = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ModifyAreaMessage} returns this
 */
proto.ModifyAreaMessage.prototype.clearName = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ModifyAreaMessage.prototype.hasName = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 x = 3;
 * @return {number}
 */
proto.ModifyAreaMessage.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ModifyAreaMessage} returns this
 */
proto.ModifyAreaMessage.prototype.setX = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ModifyAreaMessage} returns this
 */
proto.ModifyAreaMessage.prototype.clearX = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ModifyAreaMessage.prototype.hasX = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional uint32 y = 4;
 * @return {number}
 */
proto.ModifyAreaMessage.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.ModifyAreaMessage} returns this
 */
proto.ModifyAreaMessage.prototype.setY = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ModifyAreaMessage} returns this
 */
proto.ModifyAreaMessage.prototype.clearY = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ModifyAreaMessage.prototype.hasY = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional uint32 width = 5;
 * @return {number}
 */
proto.ModifyAreaMessage.prototype.getWidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.ModifyAreaMessage} returns this
 */
proto.ModifyAreaMessage.prototype.setWidth = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ModifyAreaMessage} returns this
 */
proto.ModifyAreaMessage.prototype.clearWidth = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ModifyAreaMessage.prototype.hasWidth = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional uint32 height = 6;
 * @return {number}
 */
proto.ModifyAreaMessage.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.ModifyAreaMessage} returns this
 */
proto.ModifyAreaMessage.prototype.setHeight = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ModifyAreaMessage} returns this
 */
proto.ModifyAreaMessage.prototype.clearHeight = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ModifyAreaMessage.prototype.hasHeight = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional AreaProperties properties = 7;
 * @return {?proto.AreaProperties}
 */
proto.ModifyAreaMessage.prototype.getProperties = function() {
  return /** @type{?proto.AreaProperties} */ (
    jspb.Message.getWrapperField(this, proto.AreaProperties, 7));
};


/**
 * @param {?proto.AreaProperties|undefined} value
 * @return {!proto.ModifyAreaMessage} returns this
*/
proto.ModifyAreaMessage.prototype.setProperties = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ModifyAreaMessage} returns this
 */
proto.ModifyAreaMessage.prototype.clearProperties = function() {
  return this.setProperties(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ModifyAreaMessage.prototype.hasProperties = function() {
  return jspb.Message.getField(this, 7) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AreaProperties.prototype.toObject = function(opt_includeInstance) {
  return proto.AreaProperties.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AreaProperties} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AreaProperties.toObject = function(includeInstance, msg) {
  var f, obj = {
    focusable: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    zoomMargin: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    silent: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    custompropertiesMap: (f = msg.getCustompropertiesMap()) ? f.toObject(includeInstance, proto.google.protobuf.Value.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AreaProperties}
 */
proto.AreaProperties.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AreaProperties;
  return proto.AreaProperties.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AreaProperties} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AreaProperties}
 */
proto.AreaProperties.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setFocusable(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setZoomMargin(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSilent(value);
      break;
    case 4:
      var value = msg.getCustompropertiesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.google.protobuf.Value.deserializeBinaryFromReader, "", new proto.google.protobuf.Value());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AreaProperties.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AreaProperties.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AreaProperties} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AreaProperties.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getCustompropertiesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.google.protobuf.Value.serializeBinaryToWriter);
  }
};


/**
 * optional bool focusable = 1;
 * @return {boolean}
 */
proto.AreaProperties.prototype.getFocusable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.AreaProperties} returns this
 */
proto.AreaProperties.prototype.setFocusable = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.AreaProperties} returns this
 */
proto.AreaProperties.prototype.clearFocusable = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.AreaProperties.prototype.hasFocusable = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional float zoom_margin = 2;
 * @return {number}
 */
proto.AreaProperties.prototype.getZoomMargin = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.AreaProperties} returns this
 */
proto.AreaProperties.prototype.setZoomMargin = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.AreaProperties} returns this
 */
proto.AreaProperties.prototype.clearZoomMargin = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.AreaProperties.prototype.hasZoomMargin = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional bool silent = 3;
 * @return {boolean}
 */
proto.AreaProperties.prototype.getSilent = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.AreaProperties} returns this
 */
proto.AreaProperties.prototype.setSilent = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.AreaProperties} returns this
 */
proto.AreaProperties.prototype.clearSilent = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.AreaProperties.prototype.hasSilent = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * map<string, google.protobuf.Value> customProperties = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.google.protobuf.Value>}
 */
proto.AreaProperties.prototype.getCustompropertiesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.google.protobuf.Value>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      proto.google.protobuf.Value));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.AreaProperties} returns this
 */
proto.AreaProperties.prototype.clearCustompropertiesMap = function() {
  this.getCustompropertiesMap().clear();
  return this;};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.CustomAreaProperty.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.CustomAreaProperty.ValueCase = {
  VALUE_NOT_SET: 0,
  BOOLVAL: 1,
  NUMBERVAL: 2,
  STRINGVAL: 3
};

/**
 * @return {proto.CustomAreaProperty.ValueCase}
 */
proto.CustomAreaProperty.prototype.getValueCase = function() {
  return /** @type {proto.CustomAreaProperty.ValueCase} */(jspb.Message.computeOneofCase(this, proto.CustomAreaProperty.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CustomAreaProperty.prototype.toObject = function(opt_includeInstance) {
  return proto.CustomAreaProperty.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CustomAreaProperty} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CustomAreaProperty.toObject = function(includeInstance, msg) {
  var f, obj = {
    boolval: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    numberval: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    stringval: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CustomAreaProperty}
 */
proto.CustomAreaProperty.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CustomAreaProperty;
  return proto.CustomAreaProperty.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CustomAreaProperty} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CustomAreaProperty}
 */
proto.CustomAreaProperty.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBoolval(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setNumberval(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStringval(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CustomAreaProperty.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.CustomAreaProperty.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.CustomAreaProperty} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CustomAreaProperty.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional bool boolVal = 1;
 * @return {boolean}
 */
proto.CustomAreaProperty.prototype.getBoolval = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.CustomAreaProperty} returns this
 */
proto.CustomAreaProperty.prototype.setBoolval = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.CustomAreaProperty.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.CustomAreaProperty} returns this
 */
proto.CustomAreaProperty.prototype.clearBoolval = function() {
  return jspb.Message.setOneofField(this, 1, proto.CustomAreaProperty.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.CustomAreaProperty.prototype.hasBoolval = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional float numberVal = 2;
 * @return {number}
 */
proto.CustomAreaProperty.prototype.getNumberval = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.CustomAreaProperty} returns this
 */
proto.CustomAreaProperty.prototype.setNumberval = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.CustomAreaProperty.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.CustomAreaProperty} returns this
 */
proto.CustomAreaProperty.prototype.clearNumberval = function() {
  return jspb.Message.setOneofField(this, 2, proto.CustomAreaProperty.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.CustomAreaProperty.prototype.hasNumberval = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string stringVal = 3;
 * @return {string}
 */
proto.CustomAreaProperty.prototype.getStringval = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.CustomAreaProperty} returns this
 */
proto.CustomAreaProperty.prototype.setStringval = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.CustomAreaProperty.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.CustomAreaProperty} returns this
 */
proto.CustomAreaProperty.prototype.clearStringval = function() {
  return jspb.Message.setOneofField(this, 3, proto.CustomAreaProperty.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.CustomAreaProperty.prototype.hasStringval = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DeleteAreaMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.DeleteAreaMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DeleteAreaMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DeleteAreaMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DeleteAreaMessage}
 */
proto.DeleteAreaMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DeleteAreaMessage;
  return proto.DeleteAreaMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DeleteAreaMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DeleteAreaMessage}
 */
proto.DeleteAreaMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DeleteAreaMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DeleteAreaMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DeleteAreaMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DeleteAreaMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.DeleteAreaMessage.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.DeleteAreaMessage} returns this
 */
proto.DeleteAreaMessage.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CreateAreaMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.CreateAreaMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CreateAreaMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CreateAreaMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    x: jspb.Message.getFieldWithDefault(msg, 2, 0),
    y: jspb.Message.getFieldWithDefault(msg, 3, 0),
    width: jspb.Message.getFieldWithDefault(msg, 4, 0),
    height: jspb.Message.getFieldWithDefault(msg, 5, 0),
    name: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CreateAreaMessage}
 */
proto.CreateAreaMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CreateAreaMessage;
  return proto.CreateAreaMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CreateAreaMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CreateAreaMessage}
 */
proto.CreateAreaMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setX(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setY(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setWidth(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setHeight(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CreateAreaMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.CreateAreaMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.CreateAreaMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CreateAreaMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getX();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getY();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getWidth();
  if (f !== 0) {
    writer.writeUint32(
      4,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeUint32(
      5,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.CreateAreaMessage.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.CreateAreaMessage} returns this
 */
proto.CreateAreaMessage.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint32 x = 2;
 * @return {number}
 */
proto.CreateAreaMessage.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.CreateAreaMessage} returns this
 */
proto.CreateAreaMessage.prototype.setX = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 y = 3;
 * @return {number}
 */
proto.CreateAreaMessage.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.CreateAreaMessage} returns this
 */
proto.CreateAreaMessage.prototype.setY = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint32 width = 4;
 * @return {number}
 */
proto.CreateAreaMessage.prototype.getWidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.CreateAreaMessage} returns this
 */
proto.CreateAreaMessage.prototype.setWidth = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional uint32 height = 5;
 * @return {number}
 */
proto.CreateAreaMessage.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.CreateAreaMessage} returns this
 */
proto.CreateAreaMessage.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string name = 6;
 * @return {string}
 */
proto.CreateAreaMessage.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.CreateAreaMessage} returns this
 */
proto.CreateAreaMessage.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.CreateEntityMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.CreateEntityMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.CreateEntityMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CreateEntityMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    x: jspb.Message.getFieldWithDefault(msg, 2, 0),
    y: jspb.Message.getFieldWithDefault(msg, 3, 0),
    collectionname: jspb.Message.getFieldWithDefault(msg, 4, ""),
    prefabid: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.CreateEntityMessage}
 */
proto.CreateEntityMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.CreateEntityMessage;
  return proto.CreateEntityMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.CreateEntityMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.CreateEntityMessage}
 */
proto.CreateEntityMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setX(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setY(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCollectionname(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrefabid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.CreateEntityMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.CreateEntityMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.CreateEntityMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.CreateEntityMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getX();
  if (f !== 0) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = message.getY();
  if (f !== 0) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getCollectionname();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPrefabid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.CreateEntityMessage.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.CreateEntityMessage} returns this
 */
proto.CreateEntityMessage.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 x = 2;
 * @return {number}
 */
proto.CreateEntityMessage.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.CreateEntityMessage} returns this
 */
proto.CreateEntityMessage.prototype.setX = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint32 y = 3;
 * @return {number}
 */
proto.CreateEntityMessage.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.CreateEntityMessage} returns this
 */
proto.CreateEntityMessage.prototype.setY = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string collectionName = 4;
 * @return {string}
 */
proto.CreateEntityMessage.prototype.getCollectionname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.CreateEntityMessage} returns this
 */
proto.CreateEntityMessage.prototype.setCollectionname = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string prefabId = 5;
 * @return {string}
 */
proto.CreateEntityMessage.prototype.getPrefabid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.CreateEntityMessage} returns this
 */
proto.CreateEntityMessage.prototype.setPrefabid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.DeleteEntityMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.DeleteEntityMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.DeleteEntityMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DeleteEntityMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.DeleteEntityMessage}
 */
proto.DeleteEntityMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.DeleteEntityMessage;
  return proto.DeleteEntityMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.DeleteEntityMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.DeleteEntityMessage}
 */
proto.DeleteEntityMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.DeleteEntityMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.DeleteEntityMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.DeleteEntityMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.DeleteEntityMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.DeleteEntityMessage.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.DeleteEntityMessage} returns this
 */
proto.DeleteEntityMessage.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ModifyEntityMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.ModifyEntityMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ModifyEntityMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ModifyEntityMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    x: jspb.Message.getFieldWithDefault(msg, 2, 0),
    y: jspb.Message.getFieldWithDefault(msg, 3, 0),
    propertiesMap: (f = msg.getPropertiesMap()) ? f.toObject(includeInstance, proto.google.protobuf.Value.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ModifyEntityMessage}
 */
proto.ModifyEntityMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ModifyEntityMessage;
  return proto.ModifyEntityMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ModifyEntityMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ModifyEntityMessage}
 */
proto.ModifyEntityMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setX(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setY(value);
      break;
    case 4:
      var value = msg.getPropertiesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.google.protobuf.Value.deserializeBinaryFromReader, "", new proto.google.protobuf.Value());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ModifyEntityMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ModifyEntityMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ModifyEntityMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ModifyEntityMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint32(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint32(
      3,
      f
    );
  }
  f = message.getPropertiesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.google.protobuf.Value.serializeBinaryToWriter);
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.ModifyEntityMessage.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ModifyEntityMessage} returns this
 */
proto.ModifyEntityMessage.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional uint32 x = 2;
 * @return {number}
 */
proto.ModifyEntityMessage.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ModifyEntityMessage} returns this
 */
proto.ModifyEntityMessage.prototype.setX = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ModifyEntityMessage} returns this
 */
proto.ModifyEntityMessage.prototype.clearX = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ModifyEntityMessage.prototype.hasX = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint32 y = 3;
 * @return {number}
 */
proto.ModifyEntityMessage.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ModifyEntityMessage} returns this
 */
proto.ModifyEntityMessage.prototype.setY = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.ModifyEntityMessage} returns this
 */
proto.ModifyEntityMessage.prototype.clearY = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ModifyEntityMessage.prototype.hasY = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * map<string, google.protobuf.Value> properties = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.google.protobuf.Value>}
 */
proto.ModifyEntityMessage.prototype.getPropertiesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.google.protobuf.Value>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      proto.google.protobuf.Value));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.ModifyEntityMessage} returns this
 */
proto.ModifyEntityMessage.prototype.clearPropertiesMap = function() {
  this.getPropertiesMap().clear();
  return this;};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ClientToServerMessage.oneofGroups_ = [[2,4,5,6,7,8,9,10,11,13,14,15,16,17,18,20,21,23,24]];

/**
 * @enum {number}
 */
proto.ClientToServerMessage.MessageCase = {
  MESSAGE_NOT_SET: 0,
  USERMOVESMESSAGE: 2,
  VIEWPORTMESSAGE: 4,
  ITEMEVENTMESSAGE: 5,
  SETPLAYERDETAILSMESSAGE: 6,
  WEBRTCSIGNALTOSERVERMESSAGE: 7,
  WEBRTCSCREENSHARINGSIGNALTOSERVERMESSAGE: 8,
  PLAYGLOBALMESSAGE: 9,
  STOPGLOBALMESSAGE: 10,
  REPORTPLAYERMESSAGE: 11,
  EMOTEPROMPTMESSAGE: 13,
  VARIABLEMESSAGE: 14,
  FOLLOWREQUESTMESSAGE: 15,
  FOLLOWCONFIRMATIONMESSAGE: 16,
  FOLLOWABORTMESSAGE: 17,
  LOCKGROUPPROMPTMESSAGE: 18,
  QUERYMESSAGE: 20,
  PINGMESSAGE: 21,
  ASKPOSITIONMESSAGE: 23,
  EDITMAPCOMMANDMESSAGE: 24
};

/**
 * @return {proto.ClientToServerMessage.MessageCase}
 */
proto.ClientToServerMessage.prototype.getMessageCase = function() {
  return /** @type {proto.ClientToServerMessage.MessageCase} */(jspb.Message.computeOneofCase(this, proto.ClientToServerMessage.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ClientToServerMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.ClientToServerMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ClientToServerMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ClientToServerMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    usermovesmessage: (f = msg.getUsermovesmessage()) && proto.UserMovesMessage.toObject(includeInstance, f),
    viewportmessage: (f = msg.getViewportmessage()) && proto.ViewportMessage.toObject(includeInstance, f),
    itemeventmessage: (f = msg.getItemeventmessage()) && proto.ItemEventMessage.toObject(includeInstance, f),
    setplayerdetailsmessage: (f = msg.getSetplayerdetailsmessage()) && proto.SetPlayerDetailsMessage.toObject(includeInstance, f),
    webrtcsignaltoservermessage: (f = msg.getWebrtcsignaltoservermessage()) && proto.WebRtcSignalToServerMessage.toObject(includeInstance, f),
    webrtcscreensharingsignaltoservermessage: (f = msg.getWebrtcscreensharingsignaltoservermessage()) && proto.WebRtcSignalToServerMessage.toObject(includeInstance, f),
    playglobalmessage: (f = msg.getPlayglobalmessage()) && proto.PlayGlobalMessage.toObject(includeInstance, f),
    stopglobalmessage: (f = msg.getStopglobalmessage()) && proto.StopGlobalMessage.toObject(includeInstance, f),
    reportplayermessage: (f = msg.getReportplayermessage()) && proto.ReportPlayerMessage.toObject(includeInstance, f),
    emotepromptmessage: (f = msg.getEmotepromptmessage()) && proto.EmotePromptMessage.toObject(includeInstance, f),
    variablemessage: (f = msg.getVariablemessage()) && proto.VariableMessage.toObject(includeInstance, f),
    followrequestmessage: (f = msg.getFollowrequestmessage()) && proto.FollowRequestMessage.toObject(includeInstance, f),
    followconfirmationmessage: (f = msg.getFollowconfirmationmessage()) && proto.FollowConfirmationMessage.toObject(includeInstance, f),
    followabortmessage: (f = msg.getFollowabortmessage()) && proto.FollowAbortMessage.toObject(includeInstance, f),
    lockgrouppromptmessage: (f = msg.getLockgrouppromptmessage()) && proto.LockGroupPromptMessage.toObject(includeInstance, f),
    querymessage: (f = msg.getQuerymessage()) && proto.QueryMessage.toObject(includeInstance, f),
    pingmessage: (f = msg.getPingmessage()) && proto.PingMessage.toObject(includeInstance, f),
    askpositionmessage: (f = msg.getAskpositionmessage()) && proto.AskPositionMessage.toObject(includeInstance, f),
    editmapcommandmessage: (f = msg.getEditmapcommandmessage()) && proto.EditMapCommandMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ClientToServerMessage}
 */
proto.ClientToServerMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ClientToServerMessage;
  return proto.ClientToServerMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ClientToServerMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ClientToServerMessage}
 */
proto.ClientToServerMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.UserMovesMessage;
      reader.readMessage(value,proto.UserMovesMessage.deserializeBinaryFromReader);
      msg.setUsermovesmessage(value);
      break;
    case 4:
      var value = new proto.ViewportMessage;
      reader.readMessage(value,proto.ViewportMessage.deserializeBinaryFromReader);
      msg.setViewportmessage(value);
      break;
    case 5:
      var value = new proto.ItemEventMessage;
      reader.readMessage(value,proto.ItemEventMessage.deserializeBinaryFromReader);
      msg.setItemeventmessage(value);
      break;
    case 6:
      var value = new proto.SetPlayerDetailsMessage;
      reader.readMessage(value,proto.SetPlayerDetailsMessage.deserializeBinaryFromReader);
      msg.setSetplayerdetailsmessage(value);
      break;
    case 7:
      var value = new proto.WebRtcSignalToServerMessage;
      reader.readMessage(value,proto.WebRtcSignalToServerMessage.deserializeBinaryFromReader);
      msg.setWebrtcsignaltoservermessage(value);
      break;
    case 8:
      var value = new proto.WebRtcSignalToServerMessage;
      reader.readMessage(value,proto.WebRtcSignalToServerMessage.deserializeBinaryFromReader);
      msg.setWebrtcscreensharingsignaltoservermessage(value);
      break;
    case 9:
      var value = new proto.PlayGlobalMessage;
      reader.readMessage(value,proto.PlayGlobalMessage.deserializeBinaryFromReader);
      msg.setPlayglobalmessage(value);
      break;
    case 10:
      var value = new proto.StopGlobalMessage;
      reader.readMessage(value,proto.StopGlobalMessage.deserializeBinaryFromReader);
      msg.setStopglobalmessage(value);
      break;
    case 11:
      var value = new proto.ReportPlayerMessage;
      reader.readMessage(value,proto.ReportPlayerMessage.deserializeBinaryFromReader);
      msg.setReportplayermessage(value);
      break;
    case 13:
      var value = new proto.EmotePromptMessage;
      reader.readMessage(value,proto.EmotePromptMessage.deserializeBinaryFromReader);
      msg.setEmotepromptmessage(value);
      break;
    case 14:
      var value = new proto.VariableMessage;
      reader.readMessage(value,proto.VariableMessage.deserializeBinaryFromReader);
      msg.setVariablemessage(value);
      break;
    case 15:
      var value = new proto.FollowRequestMessage;
      reader.readMessage(value,proto.FollowRequestMessage.deserializeBinaryFromReader);
      msg.setFollowrequestmessage(value);
      break;
    case 16:
      var value = new proto.FollowConfirmationMessage;
      reader.readMessage(value,proto.FollowConfirmationMessage.deserializeBinaryFromReader);
      msg.setFollowconfirmationmessage(value);
      break;
    case 17:
      var value = new proto.FollowAbortMessage;
      reader.readMessage(value,proto.FollowAbortMessage.deserializeBinaryFromReader);
      msg.setFollowabortmessage(value);
      break;
    case 18:
      var value = new proto.LockGroupPromptMessage;
      reader.readMessage(value,proto.LockGroupPromptMessage.deserializeBinaryFromReader);
      msg.setLockgrouppromptmessage(value);
      break;
    case 20:
      var value = new proto.QueryMessage;
      reader.readMessage(value,proto.QueryMessage.deserializeBinaryFromReader);
      msg.setQuerymessage(value);
      break;
    case 21:
      var value = new proto.PingMessage;
      reader.readMessage(value,proto.PingMessage.deserializeBinaryFromReader);
      msg.setPingmessage(value);
      break;
    case 23:
      var value = new proto.AskPositionMessage;
      reader.readMessage(value,proto.AskPositionMessage.deserializeBinaryFromReader);
      msg.setAskpositionmessage(value);
      break;
    case 24:
      var value = new proto.EditMapCommandMessage;
      reader.readMessage(value,proto.EditMapCommandMessage.deserializeBinaryFromReader);
      msg.setEditmapcommandmessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ClientToServerMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ClientToServerMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ClientToServerMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ClientToServerMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsermovesmessage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.UserMovesMessage.serializeBinaryToWriter
    );
  }
  f = message.getViewportmessage();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.ViewportMessage.serializeBinaryToWriter
    );
  }
  f = message.getItemeventmessage();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.ItemEventMessage.serializeBinaryToWriter
    );
  }
  f = message.getSetplayerdetailsmessage();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.SetPlayerDetailsMessage.serializeBinaryToWriter
    );
  }
  f = message.getWebrtcsignaltoservermessage();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.WebRtcSignalToServerMessage.serializeBinaryToWriter
    );
  }
  f = message.getWebrtcscreensharingsignaltoservermessage();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.WebRtcSignalToServerMessage.serializeBinaryToWriter
    );
  }
  f = message.getPlayglobalmessage();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.PlayGlobalMessage.serializeBinaryToWriter
    );
  }
  f = message.getStopglobalmessage();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.StopGlobalMessage.serializeBinaryToWriter
    );
  }
  f = message.getReportplayermessage();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.ReportPlayerMessage.serializeBinaryToWriter
    );
  }
  f = message.getEmotepromptmessage();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.EmotePromptMessage.serializeBinaryToWriter
    );
  }
  f = message.getVariablemessage();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.VariableMessage.serializeBinaryToWriter
    );
  }
  f = message.getFollowrequestmessage();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.FollowRequestMessage.serializeBinaryToWriter
    );
  }
  f = message.getFollowconfirmationmessage();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.FollowConfirmationMessage.serializeBinaryToWriter
    );
  }
  f = message.getFollowabortmessage();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.FollowAbortMessage.serializeBinaryToWriter
    );
  }
  f = message.getLockgrouppromptmessage();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.LockGroupPromptMessage.serializeBinaryToWriter
    );
  }
  f = message.getQuerymessage();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.QueryMessage.serializeBinaryToWriter
    );
  }
  f = message.getPingmessage();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.PingMessage.serializeBinaryToWriter
    );
  }
  f = message.getAskpositionmessage();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      proto.AskPositionMessage.serializeBinaryToWriter
    );
  }
  f = message.getEditmapcommandmessage();
  if (f != null) {
    writer.writeMessage(
      24,
      f,
      proto.EditMapCommandMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional UserMovesMessage userMovesMessage = 2;
 * @return {?proto.UserMovesMessage}
 */
proto.ClientToServerMessage.prototype.getUsermovesmessage = function() {
  return /** @type{?proto.UserMovesMessage} */ (
    jspb.Message.getWrapperField(this, proto.UserMovesMessage, 2));
};


/**
 * @param {?proto.UserMovesMessage|undefined} value
 * @return {!proto.ClientToServerMessage} returns this
*/
proto.ClientToServerMessage.prototype.setUsermovesmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.ClientToServerMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ClientToServerMessage} returns this
 */
proto.ClientToServerMessage.prototype.clearUsermovesmessage = function() {
  return this.setUsermovesmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ClientToServerMessage.prototype.hasUsermovesmessage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ViewportMessage viewportMessage = 4;
 * @return {?proto.ViewportMessage}
 */
proto.ClientToServerMessage.prototype.getViewportmessage = function() {
  return /** @type{?proto.ViewportMessage} */ (
    jspb.Message.getWrapperField(this, proto.ViewportMessage, 4));
};


/**
 * @param {?proto.ViewportMessage|undefined} value
 * @return {!proto.ClientToServerMessage} returns this
*/
proto.ClientToServerMessage.prototype.setViewportmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.ClientToServerMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ClientToServerMessage} returns this
 */
proto.ClientToServerMessage.prototype.clearViewportmessage = function() {
  return this.setViewportmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ClientToServerMessage.prototype.hasViewportmessage = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ItemEventMessage itemEventMessage = 5;
 * @return {?proto.ItemEventMessage}
 */
proto.ClientToServerMessage.prototype.getItemeventmessage = function() {
  return /** @type{?proto.ItemEventMessage} */ (
    jspb.Message.getWrapperField(this, proto.ItemEventMessage, 5));
};


/**
 * @param {?proto.ItemEventMessage|undefined} value
 * @return {!proto.ClientToServerMessage} returns this
*/
proto.ClientToServerMessage.prototype.setItemeventmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.ClientToServerMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ClientToServerMessage} returns this
 */
proto.ClientToServerMessage.prototype.clearItemeventmessage = function() {
  return this.setItemeventmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ClientToServerMessage.prototype.hasItemeventmessage = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional SetPlayerDetailsMessage setPlayerDetailsMessage = 6;
 * @return {?proto.SetPlayerDetailsMessage}
 */
proto.ClientToServerMessage.prototype.getSetplayerdetailsmessage = function() {
  return /** @type{?proto.SetPlayerDetailsMessage} */ (
    jspb.Message.getWrapperField(this, proto.SetPlayerDetailsMessage, 6));
};


/**
 * @param {?proto.SetPlayerDetailsMessage|undefined} value
 * @return {!proto.ClientToServerMessage} returns this
*/
proto.ClientToServerMessage.prototype.setSetplayerdetailsmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.ClientToServerMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ClientToServerMessage} returns this
 */
proto.ClientToServerMessage.prototype.clearSetplayerdetailsmessage = function() {
  return this.setSetplayerdetailsmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ClientToServerMessage.prototype.hasSetplayerdetailsmessage = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional WebRtcSignalToServerMessage webRtcSignalToServerMessage = 7;
 * @return {?proto.WebRtcSignalToServerMessage}
 */
proto.ClientToServerMessage.prototype.getWebrtcsignaltoservermessage = function() {
  return /** @type{?proto.WebRtcSignalToServerMessage} */ (
    jspb.Message.getWrapperField(this, proto.WebRtcSignalToServerMessage, 7));
};


/**
 * @param {?proto.WebRtcSignalToServerMessage|undefined} value
 * @return {!proto.ClientToServerMessage} returns this
*/
proto.ClientToServerMessage.prototype.setWebrtcsignaltoservermessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.ClientToServerMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ClientToServerMessage} returns this
 */
proto.ClientToServerMessage.prototype.clearWebrtcsignaltoservermessage = function() {
  return this.setWebrtcsignaltoservermessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ClientToServerMessage.prototype.hasWebrtcsignaltoservermessage = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional WebRtcSignalToServerMessage webRtcScreenSharingSignalToServerMessage = 8;
 * @return {?proto.WebRtcSignalToServerMessage}
 */
proto.ClientToServerMessage.prototype.getWebrtcscreensharingsignaltoservermessage = function() {
  return /** @type{?proto.WebRtcSignalToServerMessage} */ (
    jspb.Message.getWrapperField(this, proto.WebRtcSignalToServerMessage, 8));
};


/**
 * @param {?proto.WebRtcSignalToServerMessage|undefined} value
 * @return {!proto.ClientToServerMessage} returns this
*/
proto.ClientToServerMessage.prototype.setWebrtcscreensharingsignaltoservermessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.ClientToServerMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ClientToServerMessage} returns this
 */
proto.ClientToServerMessage.prototype.clearWebrtcscreensharingsignaltoservermessage = function() {
  return this.setWebrtcscreensharingsignaltoservermessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ClientToServerMessage.prototype.hasWebrtcscreensharingsignaltoservermessage = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional PlayGlobalMessage playGlobalMessage = 9;
 * @return {?proto.PlayGlobalMessage}
 */
proto.ClientToServerMessage.prototype.getPlayglobalmessage = function() {
  return /** @type{?proto.PlayGlobalMessage} */ (
    jspb.Message.getWrapperField(this, proto.PlayGlobalMessage, 9));
};


/**
 * @param {?proto.PlayGlobalMessage|undefined} value
 * @return {!proto.ClientToServerMessage} returns this
*/
proto.ClientToServerMessage.prototype.setPlayglobalmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.ClientToServerMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ClientToServerMessage} returns this
 */
proto.ClientToServerMessage.prototype.clearPlayglobalmessage = function() {
  return this.setPlayglobalmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ClientToServerMessage.prototype.hasPlayglobalmessage = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional StopGlobalMessage stopGlobalMessage = 10;
 * @return {?proto.StopGlobalMessage}
 */
proto.ClientToServerMessage.prototype.getStopglobalmessage = function() {
  return /** @type{?proto.StopGlobalMessage} */ (
    jspb.Message.getWrapperField(this, proto.StopGlobalMessage, 10));
};


/**
 * @param {?proto.StopGlobalMessage|undefined} value
 * @return {!proto.ClientToServerMessage} returns this
*/
proto.ClientToServerMessage.prototype.setStopglobalmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.ClientToServerMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ClientToServerMessage} returns this
 */
proto.ClientToServerMessage.prototype.clearStopglobalmessage = function() {
  return this.setStopglobalmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ClientToServerMessage.prototype.hasStopglobalmessage = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional ReportPlayerMessage reportPlayerMessage = 11;
 * @return {?proto.ReportPlayerMessage}
 */
proto.ClientToServerMessage.prototype.getReportplayermessage = function() {
  return /** @type{?proto.ReportPlayerMessage} */ (
    jspb.Message.getWrapperField(this, proto.ReportPlayerMessage, 11));
};


/**
 * @param {?proto.ReportPlayerMessage|undefined} value
 * @return {!proto.ClientToServerMessage} returns this
*/
proto.ClientToServerMessage.prototype.setReportplayermessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.ClientToServerMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ClientToServerMessage} returns this
 */
proto.ClientToServerMessage.prototype.clearReportplayermessage = function() {
  return this.setReportplayermessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ClientToServerMessage.prototype.hasReportplayermessage = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional EmotePromptMessage emotePromptMessage = 13;
 * @return {?proto.EmotePromptMessage}
 */
proto.ClientToServerMessage.prototype.getEmotepromptmessage = function() {
  return /** @type{?proto.EmotePromptMessage} */ (
    jspb.Message.getWrapperField(this, proto.EmotePromptMessage, 13));
};


/**
 * @param {?proto.EmotePromptMessage|undefined} value
 * @return {!proto.ClientToServerMessage} returns this
*/
proto.ClientToServerMessage.prototype.setEmotepromptmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.ClientToServerMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ClientToServerMessage} returns this
 */
proto.ClientToServerMessage.prototype.clearEmotepromptmessage = function() {
  return this.setEmotepromptmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ClientToServerMessage.prototype.hasEmotepromptmessage = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional VariableMessage variableMessage = 14;
 * @return {?proto.VariableMessage}
 */
proto.ClientToServerMessage.prototype.getVariablemessage = function() {
  return /** @type{?proto.VariableMessage} */ (
    jspb.Message.getWrapperField(this, proto.VariableMessage, 14));
};


/**
 * @param {?proto.VariableMessage|undefined} value
 * @return {!proto.ClientToServerMessage} returns this
*/
proto.ClientToServerMessage.prototype.setVariablemessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 14, proto.ClientToServerMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ClientToServerMessage} returns this
 */
proto.ClientToServerMessage.prototype.clearVariablemessage = function() {
  return this.setVariablemessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ClientToServerMessage.prototype.hasVariablemessage = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional FollowRequestMessage followRequestMessage = 15;
 * @return {?proto.FollowRequestMessage}
 */
proto.ClientToServerMessage.prototype.getFollowrequestmessage = function() {
  return /** @type{?proto.FollowRequestMessage} */ (
    jspb.Message.getWrapperField(this, proto.FollowRequestMessage, 15));
};


/**
 * @param {?proto.FollowRequestMessage|undefined} value
 * @return {!proto.ClientToServerMessage} returns this
*/
proto.ClientToServerMessage.prototype.setFollowrequestmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 15, proto.ClientToServerMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ClientToServerMessage} returns this
 */
proto.ClientToServerMessage.prototype.clearFollowrequestmessage = function() {
  return this.setFollowrequestmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ClientToServerMessage.prototype.hasFollowrequestmessage = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional FollowConfirmationMessage followConfirmationMessage = 16;
 * @return {?proto.FollowConfirmationMessage}
 */
proto.ClientToServerMessage.prototype.getFollowconfirmationmessage = function() {
  return /** @type{?proto.FollowConfirmationMessage} */ (
    jspb.Message.getWrapperField(this, proto.FollowConfirmationMessage, 16));
};


/**
 * @param {?proto.FollowConfirmationMessage|undefined} value
 * @return {!proto.ClientToServerMessage} returns this
*/
proto.ClientToServerMessage.prototype.setFollowconfirmationmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 16, proto.ClientToServerMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ClientToServerMessage} returns this
 */
proto.ClientToServerMessage.prototype.clearFollowconfirmationmessage = function() {
  return this.setFollowconfirmationmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ClientToServerMessage.prototype.hasFollowconfirmationmessage = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional FollowAbortMessage followAbortMessage = 17;
 * @return {?proto.FollowAbortMessage}
 */
proto.ClientToServerMessage.prototype.getFollowabortmessage = function() {
  return /** @type{?proto.FollowAbortMessage} */ (
    jspb.Message.getWrapperField(this, proto.FollowAbortMessage, 17));
};


/**
 * @param {?proto.FollowAbortMessage|undefined} value
 * @return {!proto.ClientToServerMessage} returns this
*/
proto.ClientToServerMessage.prototype.setFollowabortmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 17, proto.ClientToServerMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ClientToServerMessage} returns this
 */
proto.ClientToServerMessage.prototype.clearFollowabortmessage = function() {
  return this.setFollowabortmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ClientToServerMessage.prototype.hasFollowabortmessage = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional LockGroupPromptMessage lockGroupPromptMessage = 18;
 * @return {?proto.LockGroupPromptMessage}
 */
proto.ClientToServerMessage.prototype.getLockgrouppromptmessage = function() {
  return /** @type{?proto.LockGroupPromptMessage} */ (
    jspb.Message.getWrapperField(this, proto.LockGroupPromptMessage, 18));
};


/**
 * @param {?proto.LockGroupPromptMessage|undefined} value
 * @return {!proto.ClientToServerMessage} returns this
*/
proto.ClientToServerMessage.prototype.setLockgrouppromptmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 18, proto.ClientToServerMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ClientToServerMessage} returns this
 */
proto.ClientToServerMessage.prototype.clearLockgrouppromptmessage = function() {
  return this.setLockgrouppromptmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ClientToServerMessage.prototype.hasLockgrouppromptmessage = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional QueryMessage queryMessage = 20;
 * @return {?proto.QueryMessage}
 */
proto.ClientToServerMessage.prototype.getQuerymessage = function() {
  return /** @type{?proto.QueryMessage} */ (
    jspb.Message.getWrapperField(this, proto.QueryMessage, 20));
};


/**
 * @param {?proto.QueryMessage|undefined} value
 * @return {!proto.ClientToServerMessage} returns this
*/
proto.ClientToServerMessage.prototype.setQuerymessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 20, proto.ClientToServerMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ClientToServerMessage} returns this
 */
proto.ClientToServerMessage.prototype.clearQuerymessage = function() {
  return this.setQuerymessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ClientToServerMessage.prototype.hasQuerymessage = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional PingMessage pingMessage = 21;
 * @return {?proto.PingMessage}
 */
proto.ClientToServerMessage.prototype.getPingmessage = function() {
  return /** @type{?proto.PingMessage} */ (
    jspb.Message.getWrapperField(this, proto.PingMessage, 21));
};


/**
 * @param {?proto.PingMessage|undefined} value
 * @return {!proto.ClientToServerMessage} returns this
*/
proto.ClientToServerMessage.prototype.setPingmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 21, proto.ClientToServerMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ClientToServerMessage} returns this
 */
proto.ClientToServerMessage.prototype.clearPingmessage = function() {
  return this.setPingmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ClientToServerMessage.prototype.hasPingmessage = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional AskPositionMessage askPositionMessage = 23;
 * @return {?proto.AskPositionMessage}
 */
proto.ClientToServerMessage.prototype.getAskpositionmessage = function() {
  return /** @type{?proto.AskPositionMessage} */ (
    jspb.Message.getWrapperField(this, proto.AskPositionMessage, 23));
};


/**
 * @param {?proto.AskPositionMessage|undefined} value
 * @return {!proto.ClientToServerMessage} returns this
*/
proto.ClientToServerMessage.prototype.setAskpositionmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 23, proto.ClientToServerMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ClientToServerMessage} returns this
 */
proto.ClientToServerMessage.prototype.clearAskpositionmessage = function() {
  return this.setAskpositionmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ClientToServerMessage.prototype.hasAskpositionmessage = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional EditMapCommandMessage editMapCommandMessage = 24;
 * @return {?proto.EditMapCommandMessage}
 */
proto.ClientToServerMessage.prototype.getEditmapcommandmessage = function() {
  return /** @type{?proto.EditMapCommandMessage} */ (
    jspb.Message.getWrapperField(this, proto.EditMapCommandMessage, 24));
};


/**
 * @param {?proto.EditMapCommandMessage|undefined} value
 * @return {!proto.ClientToServerMessage} returns this
*/
proto.ClientToServerMessage.prototype.setEditmapcommandmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 24, proto.ClientToServerMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ClientToServerMessage} returns this
 */
proto.ClientToServerMessage.prototype.clearEditmapcommandmessage = function() {
  return this.setEditmapcommandmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ClientToServerMessage.prototype.hasEditmapcommandmessage = function() {
  return jspb.Message.getField(this, 24) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ItemEventMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.ItemEventMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ItemEventMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ItemEventMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    event: jspb.Message.getFieldWithDefault(msg, 2, ""),
    statejson: jspb.Message.getFieldWithDefault(msg, 3, ""),
    parametersjson: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ItemEventMessage}
 */
proto.ItemEventMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ItemEventMessage;
  return proto.ItemEventMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ItemEventMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ItemEventMessage}
 */
proto.ItemEventMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setItemid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEvent(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatejson(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setParametersjson(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ItemEventMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ItemEventMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ItemEventMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ItemEventMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getEvent();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStatejson();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getParametersjson();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional int32 itemId = 1;
 * @return {number}
 */
proto.ItemEventMessage.prototype.getItemid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ItemEventMessage} returns this
 */
proto.ItemEventMessage.prototype.setItemid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string event = 2;
 * @return {string}
 */
proto.ItemEventMessage.prototype.getEvent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ItemEventMessage} returns this
 */
proto.ItemEventMessage.prototype.setEvent = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string stateJson = 3;
 * @return {string}
 */
proto.ItemEventMessage.prototype.getStatejson = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.ItemEventMessage} returns this
 */
proto.ItemEventMessage.prototype.setStatejson = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string parametersJson = 4;
 * @return {string}
 */
proto.ItemEventMessage.prototype.getParametersjson = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.ItemEventMessage} returns this
 */
proto.ItemEventMessage.prototype.setParametersjson = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.VariableMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.VariableMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.VariableMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.VariableMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    value: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.VariableMessage}
 */
proto.VariableMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.VariableMessage;
  return proto.VariableMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.VariableMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.VariableMessage}
 */
proto.VariableMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.VariableMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.VariableMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.VariableMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.VariableMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.VariableMessage.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.VariableMessage} returns this
 */
proto.VariableMessage.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string value = 2;
 * @return {string}
 */
proto.VariableMessage.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.VariableMessage} returns this
 */
proto.VariableMessage.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SetPlayerVariableMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.SetPlayerVariableMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SetPlayerVariableMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SetPlayerVariableMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    value: jspb.Message.getFieldWithDefault(msg, 2, ""),
    pb_public: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    persist: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    ttl: (f = msg.getTtl()) && google_protobuf_wrappers_pb.Int32Value.toObject(includeInstance, f),
    scope: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SetPlayerVariableMessage}
 */
proto.SetPlayerVariableMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SetPlayerVariableMessage;
  return proto.SetPlayerVariableMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SetPlayerVariableMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SetPlayerVariableMessage}
 */
proto.SetPlayerVariableMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPublic(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setPersist(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.Int32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader);
      msg.setTtl(value);
      break;
    case 6:
      var value = /** @type {!proto.SetPlayerVariableMessage.Scope} */ (reader.readEnum());
      msg.setScope(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SetPlayerVariableMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SetPlayerVariableMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SetPlayerVariableMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SetPlayerVariableMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPublic();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getPersist();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getTtl();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter
    );
  }
  f = message.getScope();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.SetPlayerVariableMessage.Scope = {
  ROOM: 0,
  WORLD: 1
};

/**
 * optional string name = 1;
 * @return {string}
 */
proto.SetPlayerVariableMessage.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.SetPlayerVariableMessage} returns this
 */
proto.SetPlayerVariableMessage.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string value = 2;
 * @return {string}
 */
proto.SetPlayerVariableMessage.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.SetPlayerVariableMessage} returns this
 */
proto.SetPlayerVariableMessage.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool public = 3;
 * @return {boolean}
 */
proto.SetPlayerVariableMessage.prototype.getPublic = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.SetPlayerVariableMessage} returns this
 */
proto.SetPlayerVariableMessage.prototype.setPublic = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool persist = 4;
 * @return {boolean}
 */
proto.SetPlayerVariableMessage.prototype.getPersist = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.SetPlayerVariableMessage} returns this
 */
proto.SetPlayerVariableMessage.prototype.setPersist = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional google.protobuf.Int32Value ttl = 5;
 * @return {?proto.google.protobuf.Int32Value}
 */
proto.SetPlayerVariableMessage.prototype.getTtl = function() {
  return /** @type{?proto.google.protobuf.Int32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int32Value, 5));
};


/**
 * @param {?proto.google.protobuf.Int32Value|undefined} value
 * @return {!proto.SetPlayerVariableMessage} returns this
*/
proto.SetPlayerVariableMessage.prototype.setTtl = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.SetPlayerVariableMessage} returns this
 */
proto.SetPlayerVariableMessage.prototype.clearTtl = function() {
  return this.setTtl(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SetPlayerVariableMessage.prototype.hasTtl = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Scope scope = 6;
 * @return {!proto.SetPlayerVariableMessage.Scope}
 */
proto.SetPlayerVariableMessage.prototype.getScope = function() {
  return /** @type {!proto.SetPlayerVariableMessage.Scope} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.SetPlayerVariableMessage.Scope} value
 * @return {!proto.SetPlayerVariableMessage} returns this
 */
proto.SetPlayerVariableMessage.prototype.setScope = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.VariableWithTagMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.VariableWithTagMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.VariableWithTagMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.VariableWithTagMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    value: jspb.Message.getFieldWithDefault(msg, 2, ""),
    readableby: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.VariableWithTagMessage}
 */
proto.VariableWithTagMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.VariableWithTagMessage;
  return proto.VariableWithTagMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.VariableWithTagMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.VariableWithTagMessage}
 */
proto.VariableWithTagMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setReadableby(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.VariableWithTagMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.VariableWithTagMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.VariableWithTagMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.VariableWithTagMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getReadableby();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.VariableWithTagMessage.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.VariableWithTagMessage} returns this
 */
proto.VariableWithTagMessage.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string value = 2;
 * @return {string}
 */
proto.VariableWithTagMessage.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.VariableWithTagMessage} returns this
 */
proto.VariableWithTagMessage.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string readableBy = 3;
 * @return {string}
 */
proto.VariableWithTagMessage.prototype.getReadableby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.VariableWithTagMessage} returns this
 */
proto.VariableWithTagMessage.prototype.setReadableby = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PlayGlobalMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.PlayGlobalMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PlayGlobalMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PlayGlobalMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, ""),
    content: jspb.Message.getFieldWithDefault(msg, 2, ""),
    broadcasttoworld: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PlayGlobalMessage}
 */
proto.PlayGlobalMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PlayGlobalMessage;
  return proto.PlayGlobalMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PlayGlobalMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PlayGlobalMessage}
 */
proto.PlayGlobalMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBroadcasttoworld(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PlayGlobalMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PlayGlobalMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PlayGlobalMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PlayGlobalMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBroadcasttoworld();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.PlayGlobalMessage.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.PlayGlobalMessage} returns this
 */
proto.PlayGlobalMessage.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string content = 2;
 * @return {string}
 */
proto.PlayGlobalMessage.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.PlayGlobalMessage} returns this
 */
proto.PlayGlobalMessage.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool broadcastToWorld = 3;
 * @return {boolean}
 */
proto.PlayGlobalMessage.prototype.getBroadcasttoworld = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.PlayGlobalMessage} returns this
 */
proto.PlayGlobalMessage.prototype.setBroadcasttoworld = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.StopGlobalMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.StopGlobalMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.StopGlobalMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.StopGlobalMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.StopGlobalMessage}
 */
proto.StopGlobalMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.StopGlobalMessage;
  return proto.StopGlobalMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.StopGlobalMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.StopGlobalMessage}
 */
proto.StopGlobalMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.StopGlobalMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.StopGlobalMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.StopGlobalMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.StopGlobalMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.StopGlobalMessage.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.StopGlobalMessage} returns this
 */
proto.StopGlobalMessage.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.QueryMessage.oneofGroups_ = [[2,20]];

/**
 * @enum {number}
 */
proto.QueryMessage.QueryCase = {
  QUERY_NOT_SET: 0,
  JITSIJWTQUERY: 2,
  JOINBBBMEETINGQUERY: 20
};

/**
 * @return {proto.QueryMessage.QueryCase}
 */
proto.QueryMessage.prototype.getQueryCase = function() {
  return /** @type {proto.QueryMessage.QueryCase} */(jspb.Message.computeOneofCase(this, proto.QueryMessage.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.QueryMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.QueryMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.QueryMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.QueryMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    jitsijwtquery: (f = msg.getJitsijwtquery()) && proto.JitsiJwtQuery.toObject(includeInstance, f),
    joinbbbmeetingquery: (f = msg.getJoinbbbmeetingquery()) && proto.JoinBBBMeetingQuery.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.QueryMessage}
 */
proto.QueryMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.QueryMessage;
  return proto.QueryMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.QueryMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.QueryMessage}
 */
proto.QueryMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.JitsiJwtQuery;
      reader.readMessage(value,proto.JitsiJwtQuery.deserializeBinaryFromReader);
      msg.setJitsijwtquery(value);
      break;
    case 20:
      var value = new proto.JoinBBBMeetingQuery;
      reader.readMessage(value,proto.JoinBBBMeetingQuery.deserializeBinaryFromReader);
      msg.setJoinbbbmeetingquery(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.QueryMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.QueryMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.QueryMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.QueryMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getJitsijwtquery();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.JitsiJwtQuery.serializeBinaryToWriter
    );
  }
  f = message.getJoinbbbmeetingquery();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.JoinBBBMeetingQuery.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.QueryMessage.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.QueryMessage} returns this
 */
proto.QueryMessage.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional JitsiJwtQuery jitsiJwtQuery = 2;
 * @return {?proto.JitsiJwtQuery}
 */
proto.QueryMessage.prototype.getJitsijwtquery = function() {
  return /** @type{?proto.JitsiJwtQuery} */ (
    jspb.Message.getWrapperField(this, proto.JitsiJwtQuery, 2));
};


/**
 * @param {?proto.JitsiJwtQuery|undefined} value
 * @return {!proto.QueryMessage} returns this
*/
proto.QueryMessage.prototype.setJitsijwtquery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.QueryMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.QueryMessage} returns this
 */
proto.QueryMessage.prototype.clearJitsijwtquery = function() {
  return this.setJitsijwtquery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.QueryMessage.prototype.hasJitsijwtquery = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional JoinBBBMeetingQuery joinBBBMeetingQuery = 20;
 * @return {?proto.JoinBBBMeetingQuery}
 */
proto.QueryMessage.prototype.getJoinbbbmeetingquery = function() {
  return /** @type{?proto.JoinBBBMeetingQuery} */ (
    jspb.Message.getWrapperField(this, proto.JoinBBBMeetingQuery, 20));
};


/**
 * @param {?proto.JoinBBBMeetingQuery|undefined} value
 * @return {!proto.QueryMessage} returns this
*/
proto.QueryMessage.prototype.setJoinbbbmeetingquery = function(value) {
  return jspb.Message.setOneofWrapperField(this, 20, proto.QueryMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.QueryMessage} returns this
 */
proto.QueryMessage.prototype.clearJoinbbbmeetingquery = function() {
  return this.setJoinbbbmeetingquery(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.QueryMessage.prototype.hasJoinbbbmeetingquery = function() {
  return jspb.Message.getField(this, 20) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JitsiJwtQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.JitsiJwtQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JitsiJwtQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JitsiJwtQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    jitsiroom: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JitsiJwtQuery}
 */
proto.JitsiJwtQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JitsiJwtQuery;
  return proto.JitsiJwtQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JitsiJwtQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JitsiJwtQuery}
 */
proto.JitsiJwtQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setJitsiroom(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JitsiJwtQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JitsiJwtQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JitsiJwtQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JitsiJwtQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJitsiroom();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string jitsiRoom = 1;
 * @return {string}
 */
proto.JitsiJwtQuery.prototype.getJitsiroom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.JitsiJwtQuery} returns this
 */
proto.JitsiJwtQuery.prototype.setJitsiroom = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JoinBBBMeetingQuery.prototype.toObject = function(opt_includeInstance) {
  return proto.JoinBBBMeetingQuery.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JoinBBBMeetingQuery} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoinBBBMeetingQuery.toObject = function(includeInstance, msg) {
  var f, obj = {
    meetingid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    localmeetingid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    meetingname: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JoinBBBMeetingQuery}
 */
proto.JoinBBBMeetingQuery.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JoinBBBMeetingQuery;
  return proto.JoinBBBMeetingQuery.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JoinBBBMeetingQuery} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JoinBBBMeetingQuery}
 */
proto.JoinBBBMeetingQuery.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocalmeetingid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingname(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JoinBBBMeetingQuery.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JoinBBBMeetingQuery.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JoinBBBMeetingQuery} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoinBBBMeetingQuery.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeetingid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLocalmeetingid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMeetingname();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string meetingId = 1;
 * @return {string}
 */
proto.JoinBBBMeetingQuery.prototype.getMeetingid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.JoinBBBMeetingQuery} returns this
 */
proto.JoinBBBMeetingQuery.prototype.setMeetingid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string localMeetingId = 2;
 * @return {string}
 */
proto.JoinBBBMeetingQuery.prototype.getLocalmeetingid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.JoinBBBMeetingQuery} returns this
 */
proto.JoinBBBMeetingQuery.prototype.setLocalmeetingid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string meetingName = 3;
 * @return {string}
 */
proto.JoinBBBMeetingQuery.prototype.getMeetingname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.JoinBBBMeetingQuery} returns this
 */
proto.JoinBBBMeetingQuery.prototype.setMeetingname = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.AnswerMessage.oneofGroups_ = [[2,3,4]];

/**
 * @enum {number}
 */
proto.AnswerMessage.AnswerCase = {
  ANSWER_NOT_SET: 0,
  ERROR: 2,
  JITSIJWTANSWER: 3,
  JOINBBBMEETINGANSWER: 4
};

/**
 * @return {proto.AnswerMessage.AnswerCase}
 */
proto.AnswerMessage.prototype.getAnswerCase = function() {
  return /** @type {proto.AnswerMessage.AnswerCase} */(jspb.Message.computeOneofCase(this, proto.AnswerMessage.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AnswerMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.AnswerMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AnswerMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AnswerMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    error: (f = msg.getError()) && proto.ErrorMessage.toObject(includeInstance, f),
    jitsijwtanswer: (f = msg.getJitsijwtanswer()) && proto.JitsiJwtAnswer.toObject(includeInstance, f),
    joinbbbmeetinganswer: (f = msg.getJoinbbbmeetinganswer()) && proto.JoinBBBMeetingAnswer.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AnswerMessage}
 */
proto.AnswerMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AnswerMessage;
  return proto.AnswerMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AnswerMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AnswerMessage}
 */
proto.AnswerMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = new proto.ErrorMessage;
      reader.readMessage(value,proto.ErrorMessage.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    case 3:
      var value = new proto.JitsiJwtAnswer;
      reader.readMessage(value,proto.JitsiJwtAnswer.deserializeBinaryFromReader);
      msg.setJitsijwtanswer(value);
      break;
    case 4:
      var value = new proto.JoinBBBMeetingAnswer;
      reader.readMessage(value,proto.JoinBBBMeetingAnswer.deserializeBinaryFromReader);
      msg.setJoinbbbmeetinganswer(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AnswerMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AnswerMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AnswerMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AnswerMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ErrorMessage.serializeBinaryToWriter
    );
  }
  f = message.getJitsijwtanswer();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.JitsiJwtAnswer.serializeBinaryToWriter
    );
  }
  f = message.getJoinbbbmeetinganswer();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.JoinBBBMeetingAnswer.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.AnswerMessage.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.AnswerMessage} returns this
 */
proto.AnswerMessage.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional ErrorMessage error = 2;
 * @return {?proto.ErrorMessage}
 */
proto.AnswerMessage.prototype.getError = function() {
  return /** @type{?proto.ErrorMessage} */ (
    jspb.Message.getWrapperField(this, proto.ErrorMessage, 2));
};


/**
 * @param {?proto.ErrorMessage|undefined} value
 * @return {!proto.AnswerMessage} returns this
*/
proto.AnswerMessage.prototype.setError = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.AnswerMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.AnswerMessage} returns this
 */
proto.AnswerMessage.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.AnswerMessage.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional JitsiJwtAnswer jitsiJwtAnswer = 3;
 * @return {?proto.JitsiJwtAnswer}
 */
proto.AnswerMessage.prototype.getJitsijwtanswer = function() {
  return /** @type{?proto.JitsiJwtAnswer} */ (
    jspb.Message.getWrapperField(this, proto.JitsiJwtAnswer, 3));
};


/**
 * @param {?proto.JitsiJwtAnswer|undefined} value
 * @return {!proto.AnswerMessage} returns this
*/
proto.AnswerMessage.prototype.setJitsijwtanswer = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.AnswerMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.AnswerMessage} returns this
 */
proto.AnswerMessage.prototype.clearJitsijwtanswer = function() {
  return this.setJitsijwtanswer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.AnswerMessage.prototype.hasJitsijwtanswer = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional JoinBBBMeetingAnswer joinBBBMeetingAnswer = 4;
 * @return {?proto.JoinBBBMeetingAnswer}
 */
proto.AnswerMessage.prototype.getJoinbbbmeetinganswer = function() {
  return /** @type{?proto.JoinBBBMeetingAnswer} */ (
    jspb.Message.getWrapperField(this, proto.JoinBBBMeetingAnswer, 4));
};


/**
 * @param {?proto.JoinBBBMeetingAnswer|undefined} value
 * @return {!proto.AnswerMessage} returns this
*/
proto.AnswerMessage.prototype.setJoinbbbmeetinganswer = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.AnswerMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.AnswerMessage} returns this
 */
proto.AnswerMessage.prototype.clearJoinbbbmeetinganswer = function() {
  return this.setJoinbbbmeetinganswer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.AnswerMessage.prototype.hasJoinbbbmeetinganswer = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JitsiJwtAnswer.prototype.toObject = function(opt_includeInstance) {
  return proto.JitsiJwtAnswer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JitsiJwtAnswer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JitsiJwtAnswer.toObject = function(includeInstance, msg) {
  var f, obj = {
    jwt: jspb.Message.getFieldWithDefault(msg, 1, ""),
    url: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JitsiJwtAnswer}
 */
proto.JitsiJwtAnswer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JitsiJwtAnswer;
  return proto.JitsiJwtAnswer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JitsiJwtAnswer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JitsiJwtAnswer}
 */
proto.JitsiJwtAnswer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setJwt(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JitsiJwtAnswer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JitsiJwtAnswer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JitsiJwtAnswer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JitsiJwtAnswer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJwt();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string jwt = 1;
 * @return {string}
 */
proto.JitsiJwtAnswer.prototype.getJwt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.JitsiJwtAnswer} returns this
 */
proto.JitsiJwtAnswer.prototype.setJwt = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string url = 2;
 * @return {string}
 */
proto.JitsiJwtAnswer.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.JitsiJwtAnswer} returns this
 */
proto.JitsiJwtAnswer.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JoinBBBMeetingAnswer.prototype.toObject = function(opt_includeInstance) {
  return proto.JoinBBBMeetingAnswer.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JoinBBBMeetingAnswer} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoinBBBMeetingAnswer.toObject = function(includeInstance, msg) {
  var f, obj = {
    meetingid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    clienturl: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JoinBBBMeetingAnswer}
 */
proto.JoinBBBMeetingAnswer.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JoinBBBMeetingAnswer;
  return proto.JoinBBBMeetingAnswer.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JoinBBBMeetingAnswer} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JoinBBBMeetingAnswer}
 */
proto.JoinBBBMeetingAnswer.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMeetingid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setClienturl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JoinBBBMeetingAnswer.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JoinBBBMeetingAnswer.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JoinBBBMeetingAnswer} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoinBBBMeetingAnswer.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMeetingid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getClienturl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string meetingId = 1;
 * @return {string}
 */
proto.JoinBBBMeetingAnswer.prototype.getMeetingid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.JoinBBBMeetingAnswer} returns this
 */
proto.JoinBBBMeetingAnswer.prototype.setMeetingid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string clientURL = 2;
 * @return {string}
 */
proto.JoinBBBMeetingAnswer.prototype.getClienturl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.JoinBBBMeetingAnswer} returns this
 */
proto.JoinBBBMeetingAnswer.prototype.setClienturl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.UserMovedMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.UserMovedMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.UserMovedMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UserMovedMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    userid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    position: (f = msg.getPosition()) && proto.PositionMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.UserMovedMessage}
 */
proto.UserMovedMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.UserMovedMessage;
  return proto.UserMovedMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.UserMovedMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.UserMovedMessage}
 */
proto.UserMovedMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUserid(value);
      break;
    case 2:
      var value = new proto.PositionMessage;
      reader.readMessage(value,proto.PositionMessage.deserializeBinaryFromReader);
      msg.setPosition(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.UserMovedMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.UserMovedMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.UserMovedMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UserMovedMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.PositionMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 userId = 1;
 * @return {number}
 */
proto.UserMovedMessage.prototype.getUserid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.UserMovedMessage} returns this
 */
proto.UserMovedMessage.prototype.setUserid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional PositionMessage position = 2;
 * @return {?proto.PositionMessage}
 */
proto.UserMovedMessage.prototype.getPosition = function() {
  return /** @type{?proto.PositionMessage} */ (
    jspb.Message.getWrapperField(this, proto.PositionMessage, 2));
};


/**
 * @param {?proto.PositionMessage|undefined} value
 * @return {!proto.UserMovedMessage} returns this
*/
proto.UserMovedMessage.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.UserMovedMessage} returns this
 */
proto.UserMovedMessage.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.UserMovedMessage.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MoveToPositionMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.MoveToPositionMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MoveToPositionMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MoveToPositionMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    position: (f = msg.getPosition()) && proto.PositionMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MoveToPositionMessage}
 */
proto.MoveToPositionMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MoveToPositionMessage;
  return proto.MoveToPositionMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MoveToPositionMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MoveToPositionMessage}
 */
proto.MoveToPositionMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.PositionMessage;
      reader.readMessage(value,proto.PositionMessage.deserializeBinaryFromReader);
      msg.setPosition(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MoveToPositionMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MoveToPositionMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MoveToPositionMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MoveToPositionMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.PositionMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional PositionMessage position = 1;
 * @return {?proto.PositionMessage}
 */
proto.MoveToPositionMessage.prototype.getPosition = function() {
  return /** @type{?proto.PositionMessage} */ (
    jspb.Message.getWrapperField(this, proto.PositionMessage, 1));
};


/**
 * @param {?proto.PositionMessage|undefined} value
 * @return {!proto.MoveToPositionMessage} returns this
*/
proto.MoveToPositionMessage.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.MoveToPositionMessage} returns this
 */
proto.MoveToPositionMessage.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.MoveToPositionMessage.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.SubMessage.oneofGroups_ = [[1,2,3,4,5,6,7,8,9,10,11,13,14,15]];

/**
 * @enum {number}
 */
proto.SubMessage.MessageCase = {
  MESSAGE_NOT_SET: 0,
  USERMOVEDMESSAGE: 1,
  GROUPUPDATEMESSAGE: 2,
  GROUPDELETEMESSAGE: 3,
  USERJOINEDMESSAGE: 4,
  USERLEFTMESSAGE: 5,
  ITEMEVENTMESSAGE: 6,
  EMOTEEVENTMESSAGE: 7,
  VARIABLEMESSAGE: 8,
  ERRORMESSAGE: 9,
  PLAYERDETAILSUPDATEDMESSAGE: 10,
  PINGMESSAGE: 11,
  EDITMAPCOMMANDMESSAGE: 13,
  JOINMUCROOMMESSAGE: 14,
  LEAVEMUCROOMMESSAGE: 15
};

/**
 * @return {proto.SubMessage.MessageCase}
 */
proto.SubMessage.prototype.getMessageCase = function() {
  return /** @type {proto.SubMessage.MessageCase} */(jspb.Message.computeOneofCase(this, proto.SubMessage.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SubMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.SubMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SubMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SubMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    usermovedmessage: (f = msg.getUsermovedmessage()) && proto.UserMovedMessage.toObject(includeInstance, f),
    groupupdatemessage: (f = msg.getGroupupdatemessage()) && proto.GroupUpdateMessage.toObject(includeInstance, f),
    groupdeletemessage: (f = msg.getGroupdeletemessage()) && proto.GroupDeleteMessage.toObject(includeInstance, f),
    userjoinedmessage: (f = msg.getUserjoinedmessage()) && proto.UserJoinedMessage.toObject(includeInstance, f),
    userleftmessage: (f = msg.getUserleftmessage()) && proto.UserLeftMessage.toObject(includeInstance, f),
    itemeventmessage: (f = msg.getItemeventmessage()) && proto.ItemEventMessage.toObject(includeInstance, f),
    emoteeventmessage: (f = msg.getEmoteeventmessage()) && proto.EmoteEventMessage.toObject(includeInstance, f),
    variablemessage: (f = msg.getVariablemessage()) && proto.VariableMessage.toObject(includeInstance, f),
    errormessage: (f = msg.getErrormessage()) && proto.ErrorMessage.toObject(includeInstance, f),
    playerdetailsupdatedmessage: (f = msg.getPlayerdetailsupdatedmessage()) && proto.PlayerDetailsUpdatedMessage.toObject(includeInstance, f),
    pingmessage: (f = msg.getPingmessage()) && proto.PingMessage.toObject(includeInstance, f),
    editmapcommandmessage: (f = msg.getEditmapcommandmessage()) && proto.EditMapCommandMessage.toObject(includeInstance, f),
    joinmucroommessage: (f = msg.getJoinmucroommessage()) && proto.JoinMucRoomMessage.toObject(includeInstance, f),
    leavemucroommessage: (f = msg.getLeavemucroommessage()) && proto.LeaveMucRoomMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SubMessage}
 */
proto.SubMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SubMessage;
  return proto.SubMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SubMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SubMessage}
 */
proto.SubMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.UserMovedMessage;
      reader.readMessage(value,proto.UserMovedMessage.deserializeBinaryFromReader);
      msg.setUsermovedmessage(value);
      break;
    case 2:
      var value = new proto.GroupUpdateMessage;
      reader.readMessage(value,proto.GroupUpdateMessage.deserializeBinaryFromReader);
      msg.setGroupupdatemessage(value);
      break;
    case 3:
      var value = new proto.GroupDeleteMessage;
      reader.readMessage(value,proto.GroupDeleteMessage.deserializeBinaryFromReader);
      msg.setGroupdeletemessage(value);
      break;
    case 4:
      var value = new proto.UserJoinedMessage;
      reader.readMessage(value,proto.UserJoinedMessage.deserializeBinaryFromReader);
      msg.setUserjoinedmessage(value);
      break;
    case 5:
      var value = new proto.UserLeftMessage;
      reader.readMessage(value,proto.UserLeftMessage.deserializeBinaryFromReader);
      msg.setUserleftmessage(value);
      break;
    case 6:
      var value = new proto.ItemEventMessage;
      reader.readMessage(value,proto.ItemEventMessage.deserializeBinaryFromReader);
      msg.setItemeventmessage(value);
      break;
    case 7:
      var value = new proto.EmoteEventMessage;
      reader.readMessage(value,proto.EmoteEventMessage.deserializeBinaryFromReader);
      msg.setEmoteeventmessage(value);
      break;
    case 8:
      var value = new proto.VariableMessage;
      reader.readMessage(value,proto.VariableMessage.deserializeBinaryFromReader);
      msg.setVariablemessage(value);
      break;
    case 9:
      var value = new proto.ErrorMessage;
      reader.readMessage(value,proto.ErrorMessage.deserializeBinaryFromReader);
      msg.setErrormessage(value);
      break;
    case 10:
      var value = new proto.PlayerDetailsUpdatedMessage;
      reader.readMessage(value,proto.PlayerDetailsUpdatedMessage.deserializeBinaryFromReader);
      msg.setPlayerdetailsupdatedmessage(value);
      break;
    case 11:
      var value = new proto.PingMessage;
      reader.readMessage(value,proto.PingMessage.deserializeBinaryFromReader);
      msg.setPingmessage(value);
      break;
    case 13:
      var value = new proto.EditMapCommandMessage;
      reader.readMessage(value,proto.EditMapCommandMessage.deserializeBinaryFromReader);
      msg.setEditmapcommandmessage(value);
      break;
    case 14:
      var value = new proto.JoinMucRoomMessage;
      reader.readMessage(value,proto.JoinMucRoomMessage.deserializeBinaryFromReader);
      msg.setJoinmucroommessage(value);
      break;
    case 15:
      var value = new proto.LeaveMucRoomMessage;
      reader.readMessage(value,proto.LeaveMucRoomMessage.deserializeBinaryFromReader);
      msg.setLeavemucroommessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SubMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SubMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SubMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SubMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsermovedmessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.UserMovedMessage.serializeBinaryToWriter
    );
  }
  f = message.getGroupupdatemessage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.GroupUpdateMessage.serializeBinaryToWriter
    );
  }
  f = message.getGroupdeletemessage();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.GroupDeleteMessage.serializeBinaryToWriter
    );
  }
  f = message.getUserjoinedmessage();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.UserJoinedMessage.serializeBinaryToWriter
    );
  }
  f = message.getUserleftmessage();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.UserLeftMessage.serializeBinaryToWriter
    );
  }
  f = message.getItemeventmessage();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.ItemEventMessage.serializeBinaryToWriter
    );
  }
  f = message.getEmoteeventmessage();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.EmoteEventMessage.serializeBinaryToWriter
    );
  }
  f = message.getVariablemessage();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.VariableMessage.serializeBinaryToWriter
    );
  }
  f = message.getErrormessage();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.ErrorMessage.serializeBinaryToWriter
    );
  }
  f = message.getPlayerdetailsupdatedmessage();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.PlayerDetailsUpdatedMessage.serializeBinaryToWriter
    );
  }
  f = message.getPingmessage();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.PingMessage.serializeBinaryToWriter
    );
  }
  f = message.getEditmapcommandmessage();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.EditMapCommandMessage.serializeBinaryToWriter
    );
  }
  f = message.getJoinmucroommessage();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.JoinMucRoomMessage.serializeBinaryToWriter
    );
  }
  f = message.getLeavemucroommessage();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.LeaveMucRoomMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional UserMovedMessage userMovedMessage = 1;
 * @return {?proto.UserMovedMessage}
 */
proto.SubMessage.prototype.getUsermovedmessage = function() {
  return /** @type{?proto.UserMovedMessage} */ (
    jspb.Message.getWrapperField(this, proto.UserMovedMessage, 1));
};


/**
 * @param {?proto.UserMovedMessage|undefined} value
 * @return {!proto.SubMessage} returns this
*/
proto.SubMessage.prototype.setUsermovedmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.SubMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.SubMessage} returns this
 */
proto.SubMessage.prototype.clearUsermovedmessage = function() {
  return this.setUsermovedmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SubMessage.prototype.hasUsermovedmessage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional GroupUpdateMessage groupUpdateMessage = 2;
 * @return {?proto.GroupUpdateMessage}
 */
proto.SubMessage.prototype.getGroupupdatemessage = function() {
  return /** @type{?proto.GroupUpdateMessage} */ (
    jspb.Message.getWrapperField(this, proto.GroupUpdateMessage, 2));
};


/**
 * @param {?proto.GroupUpdateMessage|undefined} value
 * @return {!proto.SubMessage} returns this
*/
proto.SubMessage.prototype.setGroupupdatemessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.SubMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.SubMessage} returns this
 */
proto.SubMessage.prototype.clearGroupupdatemessage = function() {
  return this.setGroupupdatemessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SubMessage.prototype.hasGroupupdatemessage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional GroupDeleteMessage groupDeleteMessage = 3;
 * @return {?proto.GroupDeleteMessage}
 */
proto.SubMessage.prototype.getGroupdeletemessage = function() {
  return /** @type{?proto.GroupDeleteMessage} */ (
    jspb.Message.getWrapperField(this, proto.GroupDeleteMessage, 3));
};


/**
 * @param {?proto.GroupDeleteMessage|undefined} value
 * @return {!proto.SubMessage} returns this
*/
proto.SubMessage.prototype.setGroupdeletemessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.SubMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.SubMessage} returns this
 */
proto.SubMessage.prototype.clearGroupdeletemessage = function() {
  return this.setGroupdeletemessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SubMessage.prototype.hasGroupdeletemessage = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional UserJoinedMessage userJoinedMessage = 4;
 * @return {?proto.UserJoinedMessage}
 */
proto.SubMessage.prototype.getUserjoinedmessage = function() {
  return /** @type{?proto.UserJoinedMessage} */ (
    jspb.Message.getWrapperField(this, proto.UserJoinedMessage, 4));
};


/**
 * @param {?proto.UserJoinedMessage|undefined} value
 * @return {!proto.SubMessage} returns this
*/
proto.SubMessage.prototype.setUserjoinedmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.SubMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.SubMessage} returns this
 */
proto.SubMessage.prototype.clearUserjoinedmessage = function() {
  return this.setUserjoinedmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SubMessage.prototype.hasUserjoinedmessage = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional UserLeftMessage userLeftMessage = 5;
 * @return {?proto.UserLeftMessage}
 */
proto.SubMessage.prototype.getUserleftmessage = function() {
  return /** @type{?proto.UserLeftMessage} */ (
    jspb.Message.getWrapperField(this, proto.UserLeftMessage, 5));
};


/**
 * @param {?proto.UserLeftMessage|undefined} value
 * @return {!proto.SubMessage} returns this
*/
proto.SubMessage.prototype.setUserleftmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.SubMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.SubMessage} returns this
 */
proto.SubMessage.prototype.clearUserleftmessage = function() {
  return this.setUserleftmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SubMessage.prototype.hasUserleftmessage = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional ItemEventMessage itemEventMessage = 6;
 * @return {?proto.ItemEventMessage}
 */
proto.SubMessage.prototype.getItemeventmessage = function() {
  return /** @type{?proto.ItemEventMessage} */ (
    jspb.Message.getWrapperField(this, proto.ItemEventMessage, 6));
};


/**
 * @param {?proto.ItemEventMessage|undefined} value
 * @return {!proto.SubMessage} returns this
*/
proto.SubMessage.prototype.setItemeventmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.SubMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.SubMessage} returns this
 */
proto.SubMessage.prototype.clearItemeventmessage = function() {
  return this.setItemeventmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SubMessage.prototype.hasItemeventmessage = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional EmoteEventMessage emoteEventMessage = 7;
 * @return {?proto.EmoteEventMessage}
 */
proto.SubMessage.prototype.getEmoteeventmessage = function() {
  return /** @type{?proto.EmoteEventMessage} */ (
    jspb.Message.getWrapperField(this, proto.EmoteEventMessage, 7));
};


/**
 * @param {?proto.EmoteEventMessage|undefined} value
 * @return {!proto.SubMessage} returns this
*/
proto.SubMessage.prototype.setEmoteeventmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.SubMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.SubMessage} returns this
 */
proto.SubMessage.prototype.clearEmoteeventmessage = function() {
  return this.setEmoteeventmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SubMessage.prototype.hasEmoteeventmessage = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional VariableMessage variableMessage = 8;
 * @return {?proto.VariableMessage}
 */
proto.SubMessage.prototype.getVariablemessage = function() {
  return /** @type{?proto.VariableMessage} */ (
    jspb.Message.getWrapperField(this, proto.VariableMessage, 8));
};


/**
 * @param {?proto.VariableMessage|undefined} value
 * @return {!proto.SubMessage} returns this
*/
proto.SubMessage.prototype.setVariablemessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.SubMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.SubMessage} returns this
 */
proto.SubMessage.prototype.clearVariablemessage = function() {
  return this.setVariablemessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SubMessage.prototype.hasVariablemessage = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional ErrorMessage errorMessage = 9;
 * @return {?proto.ErrorMessage}
 */
proto.SubMessage.prototype.getErrormessage = function() {
  return /** @type{?proto.ErrorMessage} */ (
    jspb.Message.getWrapperField(this, proto.ErrorMessage, 9));
};


/**
 * @param {?proto.ErrorMessage|undefined} value
 * @return {!proto.SubMessage} returns this
*/
proto.SubMessage.prototype.setErrormessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.SubMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.SubMessage} returns this
 */
proto.SubMessage.prototype.clearErrormessage = function() {
  return this.setErrormessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SubMessage.prototype.hasErrormessage = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional PlayerDetailsUpdatedMessage playerDetailsUpdatedMessage = 10;
 * @return {?proto.PlayerDetailsUpdatedMessage}
 */
proto.SubMessage.prototype.getPlayerdetailsupdatedmessage = function() {
  return /** @type{?proto.PlayerDetailsUpdatedMessage} */ (
    jspb.Message.getWrapperField(this, proto.PlayerDetailsUpdatedMessage, 10));
};


/**
 * @param {?proto.PlayerDetailsUpdatedMessage|undefined} value
 * @return {!proto.SubMessage} returns this
*/
proto.SubMessage.prototype.setPlayerdetailsupdatedmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.SubMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.SubMessage} returns this
 */
proto.SubMessage.prototype.clearPlayerdetailsupdatedmessage = function() {
  return this.setPlayerdetailsupdatedmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SubMessage.prototype.hasPlayerdetailsupdatedmessage = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional PingMessage pingMessage = 11;
 * @return {?proto.PingMessage}
 */
proto.SubMessage.prototype.getPingmessage = function() {
  return /** @type{?proto.PingMessage} */ (
    jspb.Message.getWrapperField(this, proto.PingMessage, 11));
};


/**
 * @param {?proto.PingMessage|undefined} value
 * @return {!proto.SubMessage} returns this
*/
proto.SubMessage.prototype.setPingmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.SubMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.SubMessage} returns this
 */
proto.SubMessage.prototype.clearPingmessage = function() {
  return this.setPingmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SubMessage.prototype.hasPingmessage = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional EditMapCommandMessage editMapCommandMessage = 13;
 * @return {?proto.EditMapCommandMessage}
 */
proto.SubMessage.prototype.getEditmapcommandmessage = function() {
  return /** @type{?proto.EditMapCommandMessage} */ (
    jspb.Message.getWrapperField(this, proto.EditMapCommandMessage, 13));
};


/**
 * @param {?proto.EditMapCommandMessage|undefined} value
 * @return {!proto.SubMessage} returns this
*/
proto.SubMessage.prototype.setEditmapcommandmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.SubMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.SubMessage} returns this
 */
proto.SubMessage.prototype.clearEditmapcommandmessage = function() {
  return this.setEditmapcommandmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SubMessage.prototype.hasEditmapcommandmessage = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional JoinMucRoomMessage joinMucRoomMessage = 14;
 * @return {?proto.JoinMucRoomMessage}
 */
proto.SubMessage.prototype.getJoinmucroommessage = function() {
  return /** @type{?proto.JoinMucRoomMessage} */ (
    jspb.Message.getWrapperField(this, proto.JoinMucRoomMessage, 14));
};


/**
 * @param {?proto.JoinMucRoomMessage|undefined} value
 * @return {!proto.SubMessage} returns this
*/
proto.SubMessage.prototype.setJoinmucroommessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 14, proto.SubMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.SubMessage} returns this
 */
proto.SubMessage.prototype.clearJoinmucroommessage = function() {
  return this.setJoinmucroommessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SubMessage.prototype.hasJoinmucroommessage = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional LeaveMucRoomMessage leaveMucRoomMessage = 15;
 * @return {?proto.LeaveMucRoomMessage}
 */
proto.SubMessage.prototype.getLeavemucroommessage = function() {
  return /** @type{?proto.LeaveMucRoomMessage} */ (
    jspb.Message.getWrapperField(this, proto.LeaveMucRoomMessage, 15));
};


/**
 * @param {?proto.LeaveMucRoomMessage|undefined} value
 * @return {!proto.SubMessage} returns this
*/
proto.SubMessage.prototype.setLeavemucroommessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 15, proto.SubMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.SubMessage} returns this
 */
proto.SubMessage.prototype.clearLeavemucroommessage = function() {
  return this.setLeavemucroommessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SubMessage.prototype.hasLeavemucroommessage = function() {
  return jspb.Message.getField(this, 15) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.BatchMessage.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.BatchMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.BatchMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.BatchMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.BatchMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    event: jspb.Message.getFieldWithDefault(msg, 1, ""),
    payloadList: jspb.Message.toObjectList(msg.getPayloadList(),
    proto.SubMessage.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.BatchMessage}
 */
proto.BatchMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.BatchMessage;
  return proto.BatchMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.BatchMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.BatchMessage}
 */
proto.BatchMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEvent(value);
      break;
    case 2:
      var value = new proto.SubMessage;
      reader.readMessage(value,proto.SubMessage.deserializeBinaryFromReader);
      msg.addPayload(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.BatchMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.BatchMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.BatchMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.BatchMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEvent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPayloadList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.SubMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional string event = 1;
 * @return {string}
 */
proto.BatchMessage.prototype.getEvent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.BatchMessage} returns this
 */
proto.BatchMessage.prototype.setEvent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated SubMessage payload = 2;
 * @return {!Array<!proto.SubMessage>}
 */
proto.BatchMessage.prototype.getPayloadList = function() {
  return /** @type{!Array<!proto.SubMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.SubMessage, 2));
};


/**
 * @param {!Array<!proto.SubMessage>} value
 * @return {!proto.BatchMessage} returns this
*/
proto.BatchMessage.prototype.setPayloadList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.SubMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.SubMessage}
 */
proto.BatchMessage.prototype.addPayload = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.SubMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.BatchMessage} returns this
 */
proto.BatchMessage.prototype.clearPayloadList = function() {
  return this.setPayloadList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GroupUpdateMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.GroupUpdateMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GroupUpdateMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GroupUpdateMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    groupid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    position: (f = msg.getPosition()) && proto.PointMessage.toObject(includeInstance, f),
    groupsize: (f = msg.getGroupsize()) && google_protobuf_wrappers_pb.UInt32Value.toObject(includeInstance, f),
    locked: (f = msg.getLocked()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GroupUpdateMessage}
 */
proto.GroupUpdateMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GroupUpdateMessage;
  return proto.GroupUpdateMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GroupUpdateMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GroupUpdateMessage}
 */
proto.GroupUpdateMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGroupid(value);
      break;
    case 2:
      var value = new proto.PointMessage;
      reader.readMessage(value,proto.PointMessage.deserializeBinaryFromReader);
      msg.setPosition(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.UInt32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.UInt32Value.deserializeBinaryFromReader);
      msg.setGroupsize(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setLocked(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GroupUpdateMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GroupUpdateMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GroupUpdateMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GroupUpdateMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.PointMessage.serializeBinaryToWriter
    );
  }
  f = message.getGroupsize();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.UInt32Value.serializeBinaryToWriter
    );
  }
  f = message.getLocked();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 groupId = 1;
 * @return {number}
 */
proto.GroupUpdateMessage.prototype.getGroupid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.GroupUpdateMessage} returns this
 */
proto.GroupUpdateMessage.prototype.setGroupid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional PointMessage position = 2;
 * @return {?proto.PointMessage}
 */
proto.GroupUpdateMessage.prototype.getPosition = function() {
  return /** @type{?proto.PointMessage} */ (
    jspb.Message.getWrapperField(this, proto.PointMessage, 2));
};


/**
 * @param {?proto.PointMessage|undefined} value
 * @return {!proto.GroupUpdateMessage} returns this
*/
proto.GroupUpdateMessage.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.GroupUpdateMessage} returns this
 */
proto.GroupUpdateMessage.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.GroupUpdateMessage.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.UInt32Value groupSize = 3;
 * @return {?proto.google.protobuf.UInt32Value}
 */
proto.GroupUpdateMessage.prototype.getGroupsize = function() {
  return /** @type{?proto.google.protobuf.UInt32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.UInt32Value, 3));
};


/**
 * @param {?proto.google.protobuf.UInt32Value|undefined} value
 * @return {!proto.GroupUpdateMessage} returns this
*/
proto.GroupUpdateMessage.prototype.setGroupsize = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.GroupUpdateMessage} returns this
 */
proto.GroupUpdateMessage.prototype.clearGroupsize = function() {
  return this.setGroupsize(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.GroupUpdateMessage.prototype.hasGroupsize = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.BoolValue locked = 4;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.GroupUpdateMessage.prototype.getLocked = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 4));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.GroupUpdateMessage} returns this
*/
proto.GroupUpdateMessage.prototype.setLocked = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.GroupUpdateMessage} returns this
 */
proto.GroupUpdateMessage.prototype.clearLocked = function() {
  return this.setLocked(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.GroupUpdateMessage.prototype.hasLocked = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GroupDeleteMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.GroupDeleteMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GroupDeleteMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GroupDeleteMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    groupid: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GroupDeleteMessage}
 */
proto.GroupDeleteMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GroupDeleteMessage;
  return proto.GroupDeleteMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GroupDeleteMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GroupDeleteMessage}
 */
proto.GroupDeleteMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGroupid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GroupDeleteMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GroupDeleteMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GroupDeleteMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GroupDeleteMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 groupId = 1;
 * @return {number}
 */
proto.GroupDeleteMessage.prototype.getGroupid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.GroupDeleteMessage} returns this
 */
proto.GroupDeleteMessage.prototype.setGroupid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.UserJoinedMessage.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.UserJoinedMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.UserJoinedMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.UserJoinedMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UserJoinedMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    userid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    userjid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    characterlayersList: jspb.Message.toObjectList(msg.getCharacterlayersList(),
    proto.CharacterLayerMessage.toObject, includeInstance),
    position: (f = msg.getPosition()) && proto.PositionMessage.toObject(includeInstance, f),
    companion: (f = msg.getCompanion()) && proto.CompanionMessage.toObject(includeInstance, f),
    visitcardurl: jspb.Message.getFieldWithDefault(msg, 7, ""),
    useruuid: jspb.Message.getFieldWithDefault(msg, 8, ""),
    outlinecolor: jspb.Message.getFieldWithDefault(msg, 9, 0),
    hasoutline: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    availabilitystatus: jspb.Message.getFieldWithDefault(msg, 11, 0),
    variablesMap: (f = msg.getVariablesMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.UserJoinedMessage}
 */
proto.UserJoinedMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.UserJoinedMessage;
  return proto.UserJoinedMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.UserJoinedMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.UserJoinedMessage}
 */
proto.UserJoinedMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUserid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserjid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = new proto.CharacterLayerMessage;
      reader.readMessage(value,proto.CharacterLayerMessage.deserializeBinaryFromReader);
      msg.addCharacterlayers(value);
      break;
    case 5:
      var value = new proto.PositionMessage;
      reader.readMessage(value,proto.PositionMessage.deserializeBinaryFromReader);
      msg.setPosition(value);
      break;
    case 6:
      var value = new proto.CompanionMessage;
      reader.readMessage(value,proto.CompanionMessage.deserializeBinaryFromReader);
      msg.setCompanion(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setVisitcardurl(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setUseruuid(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOutlinecolor(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasoutline(value);
      break;
    case 11:
      var value = /** @type {!proto.AvailabilityStatus} */ (reader.readEnum());
      msg.setAvailabilitystatus(value);
      break;
    case 12:
      var value = msg.getVariablesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.UserJoinedMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.UserJoinedMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.UserJoinedMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UserJoinedMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getUserjid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCharacterlayersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.CharacterLayerMessage.serializeBinaryToWriter
    );
  }
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.PositionMessage.serializeBinaryToWriter
    );
  }
  f = message.getCompanion();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.CompanionMessage.serializeBinaryToWriter
    );
  }
  f = message.getVisitcardurl();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getUseruuid();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getOutlinecolor();
  if (f !== 0) {
    writer.writeUint32(
      9,
      f
    );
  }
  f = message.getHasoutline();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getAvailabilitystatus();
  if (f !== 0.0) {
    writer.writeEnum(
      11,
      f
    );
  }
  f = message.getVariablesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(12, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional int32 userId = 1;
 * @return {number}
 */
proto.UserJoinedMessage.prototype.getUserid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.UserJoinedMessage} returns this
 */
proto.UserJoinedMessage.prototype.setUserid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string userJid = 2;
 * @return {string}
 */
proto.UserJoinedMessage.prototype.getUserjid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.UserJoinedMessage} returns this
 */
proto.UserJoinedMessage.prototype.setUserjid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.UserJoinedMessage.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.UserJoinedMessage} returns this
 */
proto.UserJoinedMessage.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated CharacterLayerMessage characterLayers = 4;
 * @return {!Array<!proto.CharacterLayerMessage>}
 */
proto.UserJoinedMessage.prototype.getCharacterlayersList = function() {
  return /** @type{!Array<!proto.CharacterLayerMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.CharacterLayerMessage, 4));
};


/**
 * @param {!Array<!proto.CharacterLayerMessage>} value
 * @return {!proto.UserJoinedMessage} returns this
*/
proto.UserJoinedMessage.prototype.setCharacterlayersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.CharacterLayerMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.CharacterLayerMessage}
 */
proto.UserJoinedMessage.prototype.addCharacterlayers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.CharacterLayerMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.UserJoinedMessage} returns this
 */
proto.UserJoinedMessage.prototype.clearCharacterlayersList = function() {
  return this.setCharacterlayersList([]);
};


/**
 * optional PositionMessage position = 5;
 * @return {?proto.PositionMessage}
 */
proto.UserJoinedMessage.prototype.getPosition = function() {
  return /** @type{?proto.PositionMessage} */ (
    jspb.Message.getWrapperField(this, proto.PositionMessage, 5));
};


/**
 * @param {?proto.PositionMessage|undefined} value
 * @return {!proto.UserJoinedMessage} returns this
*/
proto.UserJoinedMessage.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.UserJoinedMessage} returns this
 */
proto.UserJoinedMessage.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.UserJoinedMessage.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional CompanionMessage companion = 6;
 * @return {?proto.CompanionMessage}
 */
proto.UserJoinedMessage.prototype.getCompanion = function() {
  return /** @type{?proto.CompanionMessage} */ (
    jspb.Message.getWrapperField(this, proto.CompanionMessage, 6));
};


/**
 * @param {?proto.CompanionMessage|undefined} value
 * @return {!proto.UserJoinedMessage} returns this
*/
proto.UserJoinedMessage.prototype.setCompanion = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.UserJoinedMessage} returns this
 */
proto.UserJoinedMessage.prototype.clearCompanion = function() {
  return this.setCompanion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.UserJoinedMessage.prototype.hasCompanion = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string visitCardUrl = 7;
 * @return {string}
 */
proto.UserJoinedMessage.prototype.getVisitcardurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.UserJoinedMessage} returns this
 */
proto.UserJoinedMessage.prototype.setVisitcardurl = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string userUuid = 8;
 * @return {string}
 */
proto.UserJoinedMessage.prototype.getUseruuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.UserJoinedMessage} returns this
 */
proto.UserJoinedMessage.prototype.setUseruuid = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional uint32 outlineColor = 9;
 * @return {number}
 */
proto.UserJoinedMessage.prototype.getOutlinecolor = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.UserJoinedMessage} returns this
 */
proto.UserJoinedMessage.prototype.setOutlinecolor = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional bool hasOutline = 10;
 * @return {boolean}
 */
proto.UserJoinedMessage.prototype.getHasoutline = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.UserJoinedMessage} returns this
 */
proto.UserJoinedMessage.prototype.setHasoutline = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional AvailabilityStatus availabilityStatus = 11;
 * @return {!proto.AvailabilityStatus}
 */
proto.UserJoinedMessage.prototype.getAvailabilitystatus = function() {
  return /** @type {!proto.AvailabilityStatus} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {!proto.AvailabilityStatus} value
 * @return {!proto.UserJoinedMessage} returns this
 */
proto.UserJoinedMessage.prototype.setAvailabilitystatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 11, value);
};


/**
 * map<string, string> variables = 12;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.UserJoinedMessage.prototype.getVariablesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 12, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.UserJoinedMessage} returns this
 */
proto.UserJoinedMessage.prototype.clearVariablesMap = function() {
  this.getVariablesMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.UserLeftMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.UserLeftMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.UserLeftMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UserLeftMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    userid: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.UserLeftMessage}
 */
proto.UserLeftMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.UserLeftMessage;
  return proto.UserLeftMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.UserLeftMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.UserLeftMessage}
 */
proto.UserLeftMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUserid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.UserLeftMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.UserLeftMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.UserLeftMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UserLeftMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 userId = 1;
 * @return {number}
 */
proto.UserLeftMessage.prototype.getUserid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.UserLeftMessage} returns this
 */
proto.UserLeftMessage.prototype.setUserid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ErrorMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.ErrorMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ErrorMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ErrorMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ErrorMessage}
 */
proto.ErrorMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ErrorMessage;
  return proto.ErrorMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ErrorMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ErrorMessage}
 */
proto.ErrorMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ErrorMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ErrorMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ErrorMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ErrorMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.ErrorMessage.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ErrorMessage} returns this
 */
proto.ErrorMessage.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ErrorScreenMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.ErrorScreenMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ErrorScreenMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ErrorScreenMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, ""),
    code: (f = msg.getCode()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    title: (f = msg.getTitle()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    subtitle: (f = msg.getSubtitle()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    details: (f = msg.getDetails()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    timetoretry: (f = msg.getTimetoretry()) && google_protobuf_wrappers_pb.Int32Value.toObject(includeInstance, f),
    canretrymanual: (f = msg.getCanretrymanual()) && google_protobuf_wrappers_pb.BoolValue.toObject(includeInstance, f),
    urltoredirect: (f = msg.getUrltoredirect()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    buttontitle: (f = msg.getButtontitle()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f),
    image: (f = msg.getImage()) && google_protobuf_wrappers_pb.StringValue.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ErrorScreenMessage}
 */
proto.ErrorScreenMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ErrorScreenMessage;
  return proto.ErrorScreenMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ErrorScreenMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ErrorScreenMessage}
 */
proto.ErrorScreenMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setCode(value);
      break;
    case 3:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setTitle(value);
      break;
    case 4:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setSubtitle(value);
      break;
    case 5:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    case 6:
      var value = new google_protobuf_wrappers_pb.Int32Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.Int32Value.deserializeBinaryFromReader);
      msg.setTimetoretry(value);
      break;
    case 7:
      var value = new google_protobuf_wrappers_pb.BoolValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.BoolValue.deserializeBinaryFromReader);
      msg.setCanretrymanual(value);
      break;
    case 8:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setUrltoredirect(value);
      break;
    case 9:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setButtontitle(value);
      break;
    case 10:
      var value = new google_protobuf_wrappers_pb.StringValue;
      reader.readMessage(value,google_protobuf_wrappers_pb.StringValue.deserializeBinaryFromReader);
      msg.setImage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ErrorScreenMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ErrorScreenMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ErrorScreenMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ErrorScreenMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCode();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getTitle();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getSubtitle();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getTimetoretry();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_wrappers_pb.Int32Value.serializeBinaryToWriter
    );
  }
  f = message.getCanretrymanual();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      google_protobuf_wrappers_pb.BoolValue.serializeBinaryToWriter
    );
  }
  f = message.getUrltoredirect();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getButtontitle();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
  f = message.getImage();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_wrappers_pb.StringValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.ErrorScreenMessage.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ErrorScreenMessage} returns this
 */
proto.ErrorScreenMessage.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional google.protobuf.StringValue code = 2;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.ErrorScreenMessage.prototype.getCode = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 2));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.ErrorScreenMessage} returns this
*/
proto.ErrorScreenMessage.prototype.setCode = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ErrorScreenMessage} returns this
 */
proto.ErrorScreenMessage.prototype.clearCode = function() {
  return this.setCode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ErrorScreenMessage.prototype.hasCode = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional google.protobuf.StringValue title = 3;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.ErrorScreenMessage.prototype.getTitle = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 3));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.ErrorScreenMessage} returns this
*/
proto.ErrorScreenMessage.prototype.setTitle = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ErrorScreenMessage} returns this
 */
proto.ErrorScreenMessage.prototype.clearTitle = function() {
  return this.setTitle(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ErrorScreenMessage.prototype.hasTitle = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional google.protobuf.StringValue subtitle = 4;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.ErrorScreenMessage.prototype.getSubtitle = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 4));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.ErrorScreenMessage} returns this
*/
proto.ErrorScreenMessage.prototype.setSubtitle = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ErrorScreenMessage} returns this
 */
proto.ErrorScreenMessage.prototype.clearSubtitle = function() {
  return this.setSubtitle(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ErrorScreenMessage.prototype.hasSubtitle = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional google.protobuf.StringValue details = 5;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.ErrorScreenMessage.prototype.getDetails = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 5));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.ErrorScreenMessage} returns this
*/
proto.ErrorScreenMessage.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ErrorScreenMessage} returns this
 */
proto.ErrorScreenMessage.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ErrorScreenMessage.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional google.protobuf.Int32Value timeToRetry = 6;
 * @return {?proto.google.protobuf.Int32Value}
 */
proto.ErrorScreenMessage.prototype.getTimetoretry = function() {
  return /** @type{?proto.google.protobuf.Int32Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.Int32Value, 6));
};


/**
 * @param {?proto.google.protobuf.Int32Value|undefined} value
 * @return {!proto.ErrorScreenMessage} returns this
*/
proto.ErrorScreenMessage.prototype.setTimetoretry = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ErrorScreenMessage} returns this
 */
proto.ErrorScreenMessage.prototype.clearTimetoretry = function() {
  return this.setTimetoretry(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ErrorScreenMessage.prototype.hasTimetoretry = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional google.protobuf.BoolValue canRetryManual = 7;
 * @return {?proto.google.protobuf.BoolValue}
 */
proto.ErrorScreenMessage.prototype.getCanretrymanual = function() {
  return /** @type{?proto.google.protobuf.BoolValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.BoolValue, 7));
};


/**
 * @param {?proto.google.protobuf.BoolValue|undefined} value
 * @return {!proto.ErrorScreenMessage} returns this
*/
proto.ErrorScreenMessage.prototype.setCanretrymanual = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ErrorScreenMessage} returns this
 */
proto.ErrorScreenMessage.prototype.clearCanretrymanual = function() {
  return this.setCanretrymanual(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ErrorScreenMessage.prototype.hasCanretrymanual = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.StringValue urlToRedirect = 8;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.ErrorScreenMessage.prototype.getUrltoredirect = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 8));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.ErrorScreenMessage} returns this
*/
proto.ErrorScreenMessage.prototype.setUrltoredirect = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ErrorScreenMessage} returns this
 */
proto.ErrorScreenMessage.prototype.clearUrltoredirect = function() {
  return this.setUrltoredirect(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ErrorScreenMessage.prototype.hasUrltoredirect = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.StringValue buttonTitle = 9;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.ErrorScreenMessage.prototype.getButtontitle = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 9));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.ErrorScreenMessage} returns this
*/
proto.ErrorScreenMessage.prototype.setButtontitle = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ErrorScreenMessage} returns this
 */
proto.ErrorScreenMessage.prototype.clearButtontitle = function() {
  return this.setButtontitle(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ErrorScreenMessage.prototype.hasButtontitle = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional google.protobuf.StringValue image = 10;
 * @return {?proto.google.protobuf.StringValue}
 */
proto.ErrorScreenMessage.prototype.getImage = function() {
  return /** @type{?proto.google.protobuf.StringValue} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.StringValue, 10));
};


/**
 * @param {?proto.google.protobuf.StringValue|undefined} value
 * @return {!proto.ErrorScreenMessage} returns this
*/
proto.ErrorScreenMessage.prototype.setImage = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ErrorScreenMessage} returns this
 */
proto.ErrorScreenMessage.prototype.clearImage = function() {
  return this.setImage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ErrorScreenMessage.prototype.hasImage = function() {
  return jspb.Message.getField(this, 10) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ItemStateMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.ItemStateMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ItemStateMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ItemStateMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    statejson: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ItemStateMessage}
 */
proto.ItemStateMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ItemStateMessage;
  return proto.ItemStateMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ItemStateMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ItemStateMessage}
 */
proto.ItemStateMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setItemid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatejson(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ItemStateMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ItemStateMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ItemStateMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ItemStateMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getStatejson();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int32 itemId = 1;
 * @return {number}
 */
proto.ItemStateMessage.prototype.getItemid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.ItemStateMessage} returns this
 */
proto.ItemStateMessage.prototype.setItemid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string stateJson = 2;
 * @return {string}
 */
proto.ItemStateMessage.prototype.getStatejson = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.ItemStateMessage} returns this
 */
proto.ItemStateMessage.prototype.setStatejson = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.GroupUsersUpdateMessage.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GroupUsersUpdateMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.GroupUsersUpdateMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GroupUsersUpdateMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GroupUsersUpdateMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    groupid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    useridsList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GroupUsersUpdateMessage}
 */
proto.GroupUsersUpdateMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GroupUsersUpdateMessage;
  return proto.GroupUsersUpdateMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GroupUsersUpdateMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GroupUsersUpdateMessage}
 */
proto.GroupUsersUpdateMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGroupid(value);
      break;
    case 2:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addUserids(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GroupUsersUpdateMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GroupUsersUpdateMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GroupUsersUpdateMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GroupUsersUpdateMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getUseridsList();
  if (f.length > 0) {
    writer.writePackedInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 groupId = 1;
 * @return {number}
 */
proto.GroupUsersUpdateMessage.prototype.getGroupid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.GroupUsersUpdateMessage} returns this
 */
proto.GroupUsersUpdateMessage.prototype.setGroupid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated int32 userIds = 2;
 * @return {!Array<number>}
 */
proto.GroupUsersUpdateMessage.prototype.getUseridsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.GroupUsersUpdateMessage} returns this
 */
proto.GroupUsersUpdateMessage.prototype.setUseridsList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.GroupUsersUpdateMessage} returns this
 */
proto.GroupUsersUpdateMessage.prototype.addUserids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.GroupUsersUpdateMessage} returns this
 */
proto.GroupUsersUpdateMessage.prototype.clearUseridsList = function() {
  return this.setUseridsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.RoomJoinedMessage.repeatedFields_ = [3,5,6,8,10,11];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RoomJoinedMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.RoomJoinedMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RoomJoinedMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RoomJoinedMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    itemList: jspb.Message.toObjectList(msg.getItemList(),
    proto.ItemStateMessage.toObject, includeInstance),
    currentuserid: jspb.Message.getFieldWithDefault(msg, 4, 0),
    tagList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    variableList: jspb.Message.toObjectList(msg.getVariableList(),
    proto.VariableMessage.toObject, includeInstance),
    userroomtoken: jspb.Message.getFieldWithDefault(msg, 7, ""),
    characterlayerList: jspb.Message.toObjectList(msg.getCharacterlayerList(),
    proto.CharacterLayerMessage.toObject, includeInstance),
    activatedinviteuser: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
    playervariableList: jspb.Message.toObjectList(msg.getPlayervariableList(),
    proto.VariableMessage.toObject, includeInstance),
    applicationsList: jspb.Message.toObjectList(msg.getApplicationsList(),
    proto.ApplicationMessage.toObject, includeInstance),
    userjid: jspb.Message.getFieldWithDefault(msg, 12, ""),
    editmapcommandsarraymessage: (f = msg.getEditmapcommandsarraymessage()) && proto.EditMapCommandsArrayMessage.toObject(includeInstance, f),
    webrtcusername: jspb.Message.getFieldWithDefault(msg, 14, ""),
    webrtcpassword: jspb.Message.getFieldWithDefault(msg, 15, ""),
    canedit: jspb.Message.getBooleanFieldWithDefault(msg, 16, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RoomJoinedMessage}
 */
proto.RoomJoinedMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RoomJoinedMessage;
  return proto.RoomJoinedMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RoomJoinedMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RoomJoinedMessage}
 */
proto.RoomJoinedMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 3:
      var value = new proto.ItemStateMessage;
      reader.readMessage(value,proto.ItemStateMessage.deserializeBinaryFromReader);
      msg.addItem(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCurrentuserid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addTag(value);
      break;
    case 6:
      var value = new proto.VariableMessage;
      reader.readMessage(value,proto.VariableMessage.deserializeBinaryFromReader);
      msg.addVariable(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserroomtoken(value);
      break;
    case 8:
      var value = new proto.CharacterLayerMessage;
      reader.readMessage(value,proto.CharacterLayerMessage.deserializeBinaryFromReader);
      msg.addCharacterlayer(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setActivatedinviteuser(value);
      break;
    case 10:
      var value = new proto.VariableMessage;
      reader.readMessage(value,proto.VariableMessage.deserializeBinaryFromReader);
      msg.addPlayervariable(value);
      break;
    case 11:
      var value = new proto.ApplicationMessage;
      reader.readMessage(value,proto.ApplicationMessage.deserializeBinaryFromReader);
      msg.addApplications(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserjid(value);
      break;
    case 13:
      var value = new proto.EditMapCommandsArrayMessage;
      reader.readMessage(value,proto.EditMapCommandsArrayMessage.deserializeBinaryFromReader);
      msg.setEditmapcommandsarraymessage(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setWebrtcusername(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setWebrtcpassword(value);
      break;
    case 16:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCanedit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RoomJoinedMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RoomJoinedMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RoomJoinedMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RoomJoinedMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getItemList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.ItemStateMessage.serializeBinaryToWriter
    );
  }
  f = message.getCurrentuserid();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getTagList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getVariableList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.VariableMessage.serializeBinaryToWriter
    );
  }
  f = message.getUserroomtoken();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getCharacterlayerList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.CharacterLayerMessage.serializeBinaryToWriter
    );
  }
  f = message.getActivatedinviteuser();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getPlayervariableList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto.VariableMessage.serializeBinaryToWriter
    );
  }
  f = message.getApplicationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      proto.ApplicationMessage.serializeBinaryToWriter
    );
  }
  f = message.getUserjid();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getEditmapcommandsarraymessage();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.EditMapCommandsArrayMessage.serializeBinaryToWriter
    );
  }
  f = message.getWebrtcusername();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getWebrtcpassword();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getCanedit();
  if (f) {
    writer.writeBool(
      16,
      f
    );
  }
};


/**
 * repeated ItemStateMessage item = 3;
 * @return {!Array<!proto.ItemStateMessage>}
 */
proto.RoomJoinedMessage.prototype.getItemList = function() {
  return /** @type{!Array<!proto.ItemStateMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ItemStateMessage, 3));
};


/**
 * @param {!Array<!proto.ItemStateMessage>} value
 * @return {!proto.RoomJoinedMessage} returns this
*/
proto.RoomJoinedMessage.prototype.setItemList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.ItemStateMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ItemStateMessage}
 */
proto.RoomJoinedMessage.prototype.addItem = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.ItemStateMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.RoomJoinedMessage} returns this
 */
proto.RoomJoinedMessage.prototype.clearItemList = function() {
  return this.setItemList([]);
};


/**
 * optional int32 currentUserId = 4;
 * @return {number}
 */
proto.RoomJoinedMessage.prototype.getCurrentuserid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.RoomJoinedMessage} returns this
 */
proto.RoomJoinedMessage.prototype.setCurrentuserid = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * repeated string tag = 5;
 * @return {!Array<string>}
 */
proto.RoomJoinedMessage.prototype.getTagList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.RoomJoinedMessage} returns this
 */
proto.RoomJoinedMessage.prototype.setTagList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.RoomJoinedMessage} returns this
 */
proto.RoomJoinedMessage.prototype.addTag = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.RoomJoinedMessage} returns this
 */
proto.RoomJoinedMessage.prototype.clearTagList = function() {
  return this.setTagList([]);
};


/**
 * repeated VariableMessage variable = 6;
 * @return {!Array<!proto.VariableMessage>}
 */
proto.RoomJoinedMessage.prototype.getVariableList = function() {
  return /** @type{!Array<!proto.VariableMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.VariableMessage, 6));
};


/**
 * @param {!Array<!proto.VariableMessage>} value
 * @return {!proto.RoomJoinedMessage} returns this
*/
proto.RoomJoinedMessage.prototype.setVariableList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.VariableMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.VariableMessage}
 */
proto.RoomJoinedMessage.prototype.addVariable = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.VariableMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.RoomJoinedMessage} returns this
 */
proto.RoomJoinedMessage.prototype.clearVariableList = function() {
  return this.setVariableList([]);
};


/**
 * optional string userRoomToken = 7;
 * @return {string}
 */
proto.RoomJoinedMessage.prototype.getUserroomtoken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.RoomJoinedMessage} returns this
 */
proto.RoomJoinedMessage.prototype.setUserroomtoken = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * repeated CharacterLayerMessage characterLayer = 8;
 * @return {!Array<!proto.CharacterLayerMessage>}
 */
proto.RoomJoinedMessage.prototype.getCharacterlayerList = function() {
  return /** @type{!Array<!proto.CharacterLayerMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.CharacterLayerMessage, 8));
};


/**
 * @param {!Array<!proto.CharacterLayerMessage>} value
 * @return {!proto.RoomJoinedMessage} returns this
*/
proto.RoomJoinedMessage.prototype.setCharacterlayerList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.CharacterLayerMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.CharacterLayerMessage}
 */
proto.RoomJoinedMessage.prototype.addCharacterlayer = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.CharacterLayerMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.RoomJoinedMessage} returns this
 */
proto.RoomJoinedMessage.prototype.clearCharacterlayerList = function() {
  return this.setCharacterlayerList([]);
};


/**
 * optional bool activatedInviteUser = 9;
 * @return {boolean}
 */
proto.RoomJoinedMessage.prototype.getActivatedinviteuser = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.RoomJoinedMessage} returns this
 */
proto.RoomJoinedMessage.prototype.setActivatedinviteuser = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * repeated VariableMessage playerVariable = 10;
 * @return {!Array<!proto.VariableMessage>}
 */
proto.RoomJoinedMessage.prototype.getPlayervariableList = function() {
  return /** @type{!Array<!proto.VariableMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.VariableMessage, 10));
};


/**
 * @param {!Array<!proto.VariableMessage>} value
 * @return {!proto.RoomJoinedMessage} returns this
*/
proto.RoomJoinedMessage.prototype.setPlayervariableList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.VariableMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.VariableMessage}
 */
proto.RoomJoinedMessage.prototype.addPlayervariable = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.VariableMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.RoomJoinedMessage} returns this
 */
proto.RoomJoinedMessage.prototype.clearPlayervariableList = function() {
  return this.setPlayervariableList([]);
};


/**
 * repeated ApplicationMessage applications = 11;
 * @return {!Array<!proto.ApplicationMessage>}
 */
proto.RoomJoinedMessage.prototype.getApplicationsList = function() {
  return /** @type{!Array<!proto.ApplicationMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ApplicationMessage, 11));
};


/**
 * @param {!Array<!proto.ApplicationMessage>} value
 * @return {!proto.RoomJoinedMessage} returns this
*/
proto.RoomJoinedMessage.prototype.setApplicationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.ApplicationMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ApplicationMessage}
 */
proto.RoomJoinedMessage.prototype.addApplications = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.ApplicationMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.RoomJoinedMessage} returns this
 */
proto.RoomJoinedMessage.prototype.clearApplicationsList = function() {
  return this.setApplicationsList([]);
};


/**
 * optional string userJid = 12;
 * @return {string}
 */
proto.RoomJoinedMessage.prototype.getUserjid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.RoomJoinedMessage} returns this
 */
proto.RoomJoinedMessage.prototype.setUserjid = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional EditMapCommandsArrayMessage editMapCommandsArrayMessage = 13;
 * @return {?proto.EditMapCommandsArrayMessage}
 */
proto.RoomJoinedMessage.prototype.getEditmapcommandsarraymessage = function() {
  return /** @type{?proto.EditMapCommandsArrayMessage} */ (
    jspb.Message.getWrapperField(this, proto.EditMapCommandsArrayMessage, 13));
};


/**
 * @param {?proto.EditMapCommandsArrayMessage|undefined} value
 * @return {!proto.RoomJoinedMessage} returns this
*/
proto.RoomJoinedMessage.prototype.setEditmapcommandsarraymessage = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.RoomJoinedMessage} returns this
 */
proto.RoomJoinedMessage.prototype.clearEditmapcommandsarraymessage = function() {
  return this.setEditmapcommandsarraymessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.RoomJoinedMessage.prototype.hasEditmapcommandsarraymessage = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional string webrtcUserName = 14;
 * @return {string}
 */
proto.RoomJoinedMessage.prototype.getWebrtcusername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.RoomJoinedMessage} returns this
 */
proto.RoomJoinedMessage.prototype.setWebrtcusername = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string webrtcPassword = 15;
 * @return {string}
 */
proto.RoomJoinedMessage.prototype.getWebrtcpassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.RoomJoinedMessage} returns this
 */
proto.RoomJoinedMessage.prototype.setWebrtcpassword = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional bool canEdit = 16;
 * @return {boolean}
 */
proto.RoomJoinedMessage.prototype.getCanedit = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 16, false));
};


/**
 * @param {boolean} value
 * @return {!proto.RoomJoinedMessage} returns this
 */
proto.RoomJoinedMessage.prototype.setCanedit = function(value) {
  return jspb.Message.setProto3BooleanField(this, 16, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.WebRtcStartMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.WebRtcStartMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.WebRtcStartMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.WebRtcStartMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    userid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    initiator: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    webrtcusername: jspb.Message.getFieldWithDefault(msg, 4, ""),
    webrtcpassword: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.WebRtcStartMessage}
 */
proto.WebRtcStartMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.WebRtcStartMessage;
  return proto.WebRtcStartMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.WebRtcStartMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.WebRtcStartMessage}
 */
proto.WebRtcStartMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUserid(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setInitiator(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setWebrtcusername(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setWebrtcpassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.WebRtcStartMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.WebRtcStartMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.WebRtcStartMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.WebRtcStartMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getInitiator();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getWebrtcusername();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getWebrtcpassword();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional int32 userId = 1;
 * @return {number}
 */
proto.WebRtcStartMessage.prototype.getUserid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.WebRtcStartMessage} returns this
 */
proto.WebRtcStartMessage.prototype.setUserid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool initiator = 3;
 * @return {boolean}
 */
proto.WebRtcStartMessage.prototype.getInitiator = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.WebRtcStartMessage} returns this
 */
proto.WebRtcStartMessage.prototype.setInitiator = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional string webrtcUserName = 4;
 * @return {string}
 */
proto.WebRtcStartMessage.prototype.getWebrtcusername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.WebRtcStartMessage} returns this
 */
proto.WebRtcStartMessage.prototype.setWebrtcusername = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string webrtcPassword = 5;
 * @return {string}
 */
proto.WebRtcStartMessage.prototype.getWebrtcpassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.WebRtcStartMessage} returns this
 */
proto.WebRtcStartMessage.prototype.setWebrtcpassword = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.WebRtcDisconnectMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.WebRtcDisconnectMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.WebRtcDisconnectMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.WebRtcDisconnectMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    userid: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.WebRtcDisconnectMessage}
 */
proto.WebRtcDisconnectMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.WebRtcDisconnectMessage;
  return proto.WebRtcDisconnectMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.WebRtcDisconnectMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.WebRtcDisconnectMessage}
 */
proto.WebRtcDisconnectMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUserid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.WebRtcDisconnectMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.WebRtcDisconnectMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.WebRtcDisconnectMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.WebRtcDisconnectMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 userId = 1;
 * @return {number}
 */
proto.WebRtcDisconnectMessage.prototype.getUserid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.WebRtcDisconnectMessage} returns this
 */
proto.WebRtcDisconnectMessage.prototype.setUserid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.WebRtcSignalToClientMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.WebRtcSignalToClientMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.WebRtcSignalToClientMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.WebRtcSignalToClientMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    userid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    signal: jspb.Message.getFieldWithDefault(msg, 2, ""),
    webrtcusername: jspb.Message.getFieldWithDefault(msg, 4, ""),
    webrtcpassword: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.WebRtcSignalToClientMessage}
 */
proto.WebRtcSignalToClientMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.WebRtcSignalToClientMessage;
  return proto.WebRtcSignalToClientMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.WebRtcSignalToClientMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.WebRtcSignalToClientMessage}
 */
proto.WebRtcSignalToClientMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUserid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSignal(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setWebrtcusername(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setWebrtcpassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.WebRtcSignalToClientMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.WebRtcSignalToClientMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.WebRtcSignalToClientMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.WebRtcSignalToClientMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getSignal();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getWebrtcusername();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getWebrtcpassword();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional int32 userId = 1;
 * @return {number}
 */
proto.WebRtcSignalToClientMessage.prototype.getUserid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.WebRtcSignalToClientMessage} returns this
 */
proto.WebRtcSignalToClientMessage.prototype.setUserid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string signal = 2;
 * @return {string}
 */
proto.WebRtcSignalToClientMessage.prototype.getSignal = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.WebRtcSignalToClientMessage} returns this
 */
proto.WebRtcSignalToClientMessage.prototype.setSignal = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string webrtcUserName = 4;
 * @return {string}
 */
proto.WebRtcSignalToClientMessage.prototype.getWebrtcusername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.WebRtcSignalToClientMessage} returns this
 */
proto.WebRtcSignalToClientMessage.prototype.setWebrtcusername = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string webrtcPassword = 5;
 * @return {string}
 */
proto.WebRtcSignalToClientMessage.prototype.getWebrtcpassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.WebRtcSignalToClientMessage} returns this
 */
proto.WebRtcSignalToClientMessage.prototype.setWebrtcpassword = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.TeleportMessageMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.TeleportMessageMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.TeleportMessageMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TeleportMessageMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    map: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.TeleportMessageMessage}
 */
proto.TeleportMessageMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.TeleportMessageMessage;
  return proto.TeleportMessageMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.TeleportMessageMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.TeleportMessageMessage}
 */
proto.TeleportMessageMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMap(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.TeleportMessageMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.TeleportMessageMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.TeleportMessageMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TeleportMessageMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMap();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string map = 1;
 * @return {string}
 */
proto.TeleportMessageMessage.prototype.getMap = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.TeleportMessageMessage} returns this
 */
proto.TeleportMessageMessage.prototype.setMap = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SendUserMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.SendUserMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SendUserMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SendUserMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, ""),
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SendUserMessage}
 */
proto.SendUserMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SendUserMessage;
  return proto.SendUserMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SendUserMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SendUserMessage}
 */
proto.SendUserMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SendUserMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SendUserMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SendUserMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SendUserMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.SendUserMessage.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.SendUserMessage} returns this
 */
proto.SendUserMessage.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.SendUserMessage.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.SendUserMessage} returns this
 */
proto.SendUserMessage.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.WorldFullWarningMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.WorldFullWarningMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.WorldFullWarningMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.WorldFullWarningMessage.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.WorldFullWarningMessage}
 */
proto.WorldFullWarningMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.WorldFullWarningMessage;
  return proto.WorldFullWarningMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.WorldFullWarningMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.WorldFullWarningMessage}
 */
proto.WorldFullWarningMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.WorldFullWarningMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.WorldFullWarningMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.WorldFullWarningMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.WorldFullWarningMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.WorldFullWarningToRoomMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.WorldFullWarningToRoomMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.WorldFullWarningToRoomMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.WorldFullWarningToRoomMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    roomid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.WorldFullWarningToRoomMessage}
 */
proto.WorldFullWarningToRoomMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.WorldFullWarningToRoomMessage;
  return proto.WorldFullWarningToRoomMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.WorldFullWarningToRoomMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.WorldFullWarningToRoomMessage}
 */
proto.WorldFullWarningToRoomMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoomid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.WorldFullWarningToRoomMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.WorldFullWarningToRoomMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.WorldFullWarningToRoomMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.WorldFullWarningToRoomMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoomid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string roomId = 1;
 * @return {string}
 */
proto.WorldFullWarningToRoomMessage.prototype.getRoomid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.WorldFullWarningToRoomMessage} returns this
 */
proto.WorldFullWarningToRoomMessage.prototype.setRoomid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RefreshRoomPromptMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.RefreshRoomPromptMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RefreshRoomPromptMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RefreshRoomPromptMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    roomid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RefreshRoomPromptMessage}
 */
proto.RefreshRoomPromptMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RefreshRoomPromptMessage;
  return proto.RefreshRoomPromptMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RefreshRoomPromptMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RefreshRoomPromptMessage}
 */
proto.RefreshRoomPromptMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoomid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RefreshRoomPromptMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RefreshRoomPromptMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RefreshRoomPromptMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RefreshRoomPromptMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoomid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string roomId = 1;
 * @return {string}
 */
proto.RefreshRoomPromptMessage.prototype.getRoomid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.RefreshRoomPromptMessage} returns this
 */
proto.RefreshRoomPromptMessage.prototype.setRoomid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RefreshRoomMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.RefreshRoomMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RefreshRoomMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RefreshRoomMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    roomid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    versionnumber: jspb.Message.getFieldWithDefault(msg, 2, 0),
    comment: jspb.Message.getFieldWithDefault(msg, 3, ""),
    timetorefresh: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RefreshRoomMessage}
 */
proto.RefreshRoomMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RefreshRoomMessage;
  return proto.RefreshRoomMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RefreshRoomMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RefreshRoomMessage}
 */
proto.RefreshRoomMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoomid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVersionnumber(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setComment(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTimetorefresh(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RefreshRoomMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RefreshRoomMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RefreshRoomMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RefreshRoomMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoomid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVersionnumber();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional string roomId = 1;
 * @return {string}
 */
proto.RefreshRoomMessage.prototype.getRoomid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.RefreshRoomMessage} returns this
 */
proto.RefreshRoomMessage.prototype.setRoomid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 versionNumber = 2;
 * @return {number}
 */
proto.RefreshRoomMessage.prototype.getVersionnumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.RefreshRoomMessage} returns this
 */
proto.RefreshRoomMessage.prototype.setVersionnumber = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string comment = 3;
 * @return {string}
 */
proto.RefreshRoomMessage.prototype.getComment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.RefreshRoomMessage} returns this
 */
proto.RefreshRoomMessage.prototype.setComment = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.RefreshRoomMessage} returns this
 */
proto.RefreshRoomMessage.prototype.clearComment = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.RefreshRoomMessage.prototype.hasComment = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 timeToRefresh = 4;
 * @return {number}
 */
proto.RefreshRoomMessage.prototype.getTimetorefresh = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.RefreshRoomMessage} returns this
 */
proto.RefreshRoomMessage.prototype.setTimetorefresh = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.RefreshRoomMessage} returns this
 */
proto.RefreshRoomMessage.prototype.clearTimetorefresh = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.RefreshRoomMessage.prototype.hasTimetorefresh = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.WorldFullMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.WorldFullMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.WorldFullMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.WorldFullMessage.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.WorldFullMessage}
 */
proto.WorldFullMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.WorldFullMessage;
  return proto.WorldFullMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.WorldFullMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.WorldFullMessage}
 */
proto.WorldFullMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.WorldFullMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.WorldFullMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.WorldFullMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.WorldFullMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.TokenExpiredMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.TokenExpiredMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.TokenExpiredMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TokenExpiredMessage.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.TokenExpiredMessage}
 */
proto.TokenExpiredMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.TokenExpiredMessage;
  return proto.TokenExpiredMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.TokenExpiredMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.TokenExpiredMessage}
 */
proto.TokenExpiredMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.TokenExpiredMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.TokenExpiredMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.TokenExpiredMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.TokenExpiredMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.InvalidTextureMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.InvalidTextureMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.InvalidTextureMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.InvalidTextureMessage.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.InvalidTextureMessage}
 */
proto.InvalidTextureMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.InvalidTextureMessage;
  return proto.InvalidTextureMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.InvalidTextureMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.InvalidTextureMessage}
 */
proto.InvalidTextureMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.InvalidTextureMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.InvalidTextureMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.InvalidTextureMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.InvalidTextureMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.WorldConnexionMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.WorldConnexionMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.WorldConnexionMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.WorldConnexionMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.WorldConnexionMessage}
 */
proto.WorldConnexionMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.WorldConnexionMessage;
  return proto.WorldConnexionMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.WorldConnexionMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.WorldConnexionMessage}
 */
proto.WorldConnexionMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.WorldConnexionMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.WorldConnexionMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.WorldConnexionMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.WorldConnexionMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.WorldConnexionMessage.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.WorldConnexionMessage} returns this
 */
proto.WorldConnexionMessage.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.BanUserMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.BanUserMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.BanUserMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.BanUserMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, ""),
    message: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.BanUserMessage}
 */
proto.BanUserMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.BanUserMessage;
  return proto.BanUserMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.BanUserMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.BanUserMessage}
 */
proto.BanUserMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.BanUserMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.BanUserMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.BanUserMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.BanUserMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.BanUserMessage.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.BanUserMessage} returns this
 */
proto.BanUserMessage.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.BanUserMessage.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.BanUserMessage} returns this
 */
proto.BanUserMessage.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AskPositionMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.AskPositionMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AskPositionMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AskPositionMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    useridentifier: jspb.Message.getFieldWithDefault(msg, 1, ""),
    playuri: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AskPositionMessage}
 */
proto.AskPositionMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AskPositionMessage;
  return proto.AskPositionMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AskPositionMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AskPositionMessage}
 */
proto.AskPositionMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUseridentifier(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayuri(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AskPositionMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AskPositionMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AskPositionMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AskPositionMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUseridentifier();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPlayuri();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string userIdentifier = 1;
 * @return {string}
 */
proto.AskPositionMessage.prototype.getUseridentifier = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.AskPositionMessage} returns this
 */
proto.AskPositionMessage.prototype.setUseridentifier = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string playUri = 2;
 * @return {string}
 */
proto.AskPositionMessage.prototype.getPlayuri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.AskPositionMessage} returns this
 */
proto.AskPositionMessage.prototype.setPlayuri = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ServerToClientMessage.oneofGroups_ = [[1,2,3,4,5,6,7,10,12,13,15,16,17,18,20,21,22,23,24,25,26,28,29,31]];

/**
 * @enum {number}
 */
proto.ServerToClientMessage.MessageCase = {
  MESSAGE_NOT_SET: 0,
  BATCHMESSAGE: 1,
  ERRORMESSAGE: 2,
  ROOMJOINEDMESSAGE: 3,
  WEBRTCSTARTMESSAGE: 4,
  WEBRTCSIGNALTOCLIENTMESSAGE: 5,
  WEBRTCSCREENSHARINGSIGNALTOCLIENTMESSAGE: 6,
  WEBRTCDISCONNECTMESSAGE: 7,
  TELEPORTMESSAGEMESSAGE: 10,
  SENDUSERMESSAGE: 12,
  BANUSERMESSAGE: 13,
  WORLDFULLWARNINGMESSAGE: 15,
  WORLDFULLMESSAGE: 16,
  REFRESHROOMMESSAGE: 17,
  WORLDCONNEXIONMESSAGE: 18,
  TOKENEXPIREDMESSAGE: 20,
  FOLLOWREQUESTMESSAGE: 21,
  FOLLOWCONFIRMATIONMESSAGE: 22,
  FOLLOWABORTMESSAGE: 23,
  INVALIDTEXTUREMESSAGE: 24,
  GROUPUSERSUPDATEMESSAGE: 25,
  ERRORSCREENMESSAGE: 26,
  ANSWERMESSAGE: 28,
  XMPPSETTINGSMESSAGE: 29,
  MOVETOPOSITIONMESSAGE: 31
};

/**
 * @return {proto.ServerToClientMessage.MessageCase}
 */
proto.ServerToClientMessage.prototype.getMessageCase = function() {
  return /** @type {proto.ServerToClientMessage.MessageCase} */(jspb.Message.computeOneofCase(this, proto.ServerToClientMessage.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ServerToClientMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.ServerToClientMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ServerToClientMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ServerToClientMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    batchmessage: (f = msg.getBatchmessage()) && proto.BatchMessage.toObject(includeInstance, f),
    errormessage: (f = msg.getErrormessage()) && proto.ErrorMessage.toObject(includeInstance, f),
    roomjoinedmessage: (f = msg.getRoomjoinedmessage()) && proto.RoomJoinedMessage.toObject(includeInstance, f),
    webrtcstartmessage: (f = msg.getWebrtcstartmessage()) && proto.WebRtcStartMessage.toObject(includeInstance, f),
    webrtcsignaltoclientmessage: (f = msg.getWebrtcsignaltoclientmessage()) && proto.WebRtcSignalToClientMessage.toObject(includeInstance, f),
    webrtcscreensharingsignaltoclientmessage: (f = msg.getWebrtcscreensharingsignaltoclientmessage()) && proto.WebRtcSignalToClientMessage.toObject(includeInstance, f),
    webrtcdisconnectmessage: (f = msg.getWebrtcdisconnectmessage()) && proto.WebRtcDisconnectMessage.toObject(includeInstance, f),
    teleportmessagemessage: (f = msg.getTeleportmessagemessage()) && proto.TeleportMessageMessage.toObject(includeInstance, f),
    sendusermessage: (f = msg.getSendusermessage()) && proto.SendUserMessage.toObject(includeInstance, f),
    banusermessage: (f = msg.getBanusermessage()) && proto.BanUserMessage.toObject(includeInstance, f),
    worldfullwarningmessage: (f = msg.getWorldfullwarningmessage()) && proto.WorldFullWarningMessage.toObject(includeInstance, f),
    worldfullmessage: (f = msg.getWorldfullmessage()) && proto.WorldFullMessage.toObject(includeInstance, f),
    refreshroommessage: (f = msg.getRefreshroommessage()) && proto.RefreshRoomMessage.toObject(includeInstance, f),
    worldconnexionmessage: (f = msg.getWorldconnexionmessage()) && proto.WorldConnexionMessage.toObject(includeInstance, f),
    tokenexpiredmessage: (f = msg.getTokenexpiredmessage()) && proto.TokenExpiredMessage.toObject(includeInstance, f),
    followrequestmessage: (f = msg.getFollowrequestmessage()) && proto.FollowRequestMessage.toObject(includeInstance, f),
    followconfirmationmessage: (f = msg.getFollowconfirmationmessage()) && proto.FollowConfirmationMessage.toObject(includeInstance, f),
    followabortmessage: (f = msg.getFollowabortmessage()) && proto.FollowAbortMessage.toObject(includeInstance, f),
    invalidtexturemessage: (f = msg.getInvalidtexturemessage()) && proto.InvalidTextureMessage.toObject(includeInstance, f),
    groupusersupdatemessage: (f = msg.getGroupusersupdatemessage()) && proto.GroupUsersUpdateMessage.toObject(includeInstance, f),
    errorscreenmessage: (f = msg.getErrorscreenmessage()) && proto.ErrorScreenMessage.toObject(includeInstance, f),
    answermessage: (f = msg.getAnswermessage()) && proto.AnswerMessage.toObject(includeInstance, f),
    xmppsettingsmessage: (f = msg.getXmppsettingsmessage()) && proto.XmppSettingsMessage.toObject(includeInstance, f),
    movetopositionmessage: (f = msg.getMovetopositionmessage()) && proto.MoveToPositionMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ServerToClientMessage}
 */
proto.ServerToClientMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ServerToClientMessage;
  return proto.ServerToClientMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ServerToClientMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ServerToClientMessage}
 */
proto.ServerToClientMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.BatchMessage;
      reader.readMessage(value,proto.BatchMessage.deserializeBinaryFromReader);
      msg.setBatchmessage(value);
      break;
    case 2:
      var value = new proto.ErrorMessage;
      reader.readMessage(value,proto.ErrorMessage.deserializeBinaryFromReader);
      msg.setErrormessage(value);
      break;
    case 3:
      var value = new proto.RoomJoinedMessage;
      reader.readMessage(value,proto.RoomJoinedMessage.deserializeBinaryFromReader);
      msg.setRoomjoinedmessage(value);
      break;
    case 4:
      var value = new proto.WebRtcStartMessage;
      reader.readMessage(value,proto.WebRtcStartMessage.deserializeBinaryFromReader);
      msg.setWebrtcstartmessage(value);
      break;
    case 5:
      var value = new proto.WebRtcSignalToClientMessage;
      reader.readMessage(value,proto.WebRtcSignalToClientMessage.deserializeBinaryFromReader);
      msg.setWebrtcsignaltoclientmessage(value);
      break;
    case 6:
      var value = new proto.WebRtcSignalToClientMessage;
      reader.readMessage(value,proto.WebRtcSignalToClientMessage.deserializeBinaryFromReader);
      msg.setWebrtcscreensharingsignaltoclientmessage(value);
      break;
    case 7:
      var value = new proto.WebRtcDisconnectMessage;
      reader.readMessage(value,proto.WebRtcDisconnectMessage.deserializeBinaryFromReader);
      msg.setWebrtcdisconnectmessage(value);
      break;
    case 10:
      var value = new proto.TeleportMessageMessage;
      reader.readMessage(value,proto.TeleportMessageMessage.deserializeBinaryFromReader);
      msg.setTeleportmessagemessage(value);
      break;
    case 12:
      var value = new proto.SendUserMessage;
      reader.readMessage(value,proto.SendUserMessage.deserializeBinaryFromReader);
      msg.setSendusermessage(value);
      break;
    case 13:
      var value = new proto.BanUserMessage;
      reader.readMessage(value,proto.BanUserMessage.deserializeBinaryFromReader);
      msg.setBanusermessage(value);
      break;
    case 15:
      var value = new proto.WorldFullWarningMessage;
      reader.readMessage(value,proto.WorldFullWarningMessage.deserializeBinaryFromReader);
      msg.setWorldfullwarningmessage(value);
      break;
    case 16:
      var value = new proto.WorldFullMessage;
      reader.readMessage(value,proto.WorldFullMessage.deserializeBinaryFromReader);
      msg.setWorldfullmessage(value);
      break;
    case 17:
      var value = new proto.RefreshRoomMessage;
      reader.readMessage(value,proto.RefreshRoomMessage.deserializeBinaryFromReader);
      msg.setRefreshroommessage(value);
      break;
    case 18:
      var value = new proto.WorldConnexionMessage;
      reader.readMessage(value,proto.WorldConnexionMessage.deserializeBinaryFromReader);
      msg.setWorldconnexionmessage(value);
      break;
    case 20:
      var value = new proto.TokenExpiredMessage;
      reader.readMessage(value,proto.TokenExpiredMessage.deserializeBinaryFromReader);
      msg.setTokenexpiredmessage(value);
      break;
    case 21:
      var value = new proto.FollowRequestMessage;
      reader.readMessage(value,proto.FollowRequestMessage.deserializeBinaryFromReader);
      msg.setFollowrequestmessage(value);
      break;
    case 22:
      var value = new proto.FollowConfirmationMessage;
      reader.readMessage(value,proto.FollowConfirmationMessage.deserializeBinaryFromReader);
      msg.setFollowconfirmationmessage(value);
      break;
    case 23:
      var value = new proto.FollowAbortMessage;
      reader.readMessage(value,proto.FollowAbortMessage.deserializeBinaryFromReader);
      msg.setFollowabortmessage(value);
      break;
    case 24:
      var value = new proto.InvalidTextureMessage;
      reader.readMessage(value,proto.InvalidTextureMessage.deserializeBinaryFromReader);
      msg.setInvalidtexturemessage(value);
      break;
    case 25:
      var value = new proto.GroupUsersUpdateMessage;
      reader.readMessage(value,proto.GroupUsersUpdateMessage.deserializeBinaryFromReader);
      msg.setGroupusersupdatemessage(value);
      break;
    case 26:
      var value = new proto.ErrorScreenMessage;
      reader.readMessage(value,proto.ErrorScreenMessage.deserializeBinaryFromReader);
      msg.setErrorscreenmessage(value);
      break;
    case 28:
      var value = new proto.AnswerMessage;
      reader.readMessage(value,proto.AnswerMessage.deserializeBinaryFromReader);
      msg.setAnswermessage(value);
      break;
    case 29:
      var value = new proto.XmppSettingsMessage;
      reader.readMessage(value,proto.XmppSettingsMessage.deserializeBinaryFromReader);
      msg.setXmppsettingsmessage(value);
      break;
    case 31:
      var value = new proto.MoveToPositionMessage;
      reader.readMessage(value,proto.MoveToPositionMessage.deserializeBinaryFromReader);
      msg.setMovetopositionmessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ServerToClientMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ServerToClientMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ServerToClientMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ServerToClientMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBatchmessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.BatchMessage.serializeBinaryToWriter
    );
  }
  f = message.getErrormessage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ErrorMessage.serializeBinaryToWriter
    );
  }
  f = message.getRoomjoinedmessage();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.RoomJoinedMessage.serializeBinaryToWriter
    );
  }
  f = message.getWebrtcstartmessage();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.WebRtcStartMessage.serializeBinaryToWriter
    );
  }
  f = message.getWebrtcsignaltoclientmessage();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.WebRtcSignalToClientMessage.serializeBinaryToWriter
    );
  }
  f = message.getWebrtcscreensharingsignaltoclientmessage();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.WebRtcSignalToClientMessage.serializeBinaryToWriter
    );
  }
  f = message.getWebrtcdisconnectmessage();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.WebRtcDisconnectMessage.serializeBinaryToWriter
    );
  }
  f = message.getTeleportmessagemessage();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.TeleportMessageMessage.serializeBinaryToWriter
    );
  }
  f = message.getSendusermessage();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.SendUserMessage.serializeBinaryToWriter
    );
  }
  f = message.getBanusermessage();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.BanUserMessage.serializeBinaryToWriter
    );
  }
  f = message.getWorldfullwarningmessage();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.WorldFullWarningMessage.serializeBinaryToWriter
    );
  }
  f = message.getWorldfullmessage();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.WorldFullMessage.serializeBinaryToWriter
    );
  }
  f = message.getRefreshroommessage();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.RefreshRoomMessage.serializeBinaryToWriter
    );
  }
  f = message.getWorldconnexionmessage();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.WorldConnexionMessage.serializeBinaryToWriter
    );
  }
  f = message.getTokenexpiredmessage();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.TokenExpiredMessage.serializeBinaryToWriter
    );
  }
  f = message.getFollowrequestmessage();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.FollowRequestMessage.serializeBinaryToWriter
    );
  }
  f = message.getFollowconfirmationmessage();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto.FollowConfirmationMessage.serializeBinaryToWriter
    );
  }
  f = message.getFollowabortmessage();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      proto.FollowAbortMessage.serializeBinaryToWriter
    );
  }
  f = message.getInvalidtexturemessage();
  if (f != null) {
    writer.writeMessage(
      24,
      f,
      proto.InvalidTextureMessage.serializeBinaryToWriter
    );
  }
  f = message.getGroupusersupdatemessage();
  if (f != null) {
    writer.writeMessage(
      25,
      f,
      proto.GroupUsersUpdateMessage.serializeBinaryToWriter
    );
  }
  f = message.getErrorscreenmessage();
  if (f != null) {
    writer.writeMessage(
      26,
      f,
      proto.ErrorScreenMessage.serializeBinaryToWriter
    );
  }
  f = message.getAnswermessage();
  if (f != null) {
    writer.writeMessage(
      28,
      f,
      proto.AnswerMessage.serializeBinaryToWriter
    );
  }
  f = message.getXmppsettingsmessage();
  if (f != null) {
    writer.writeMessage(
      29,
      f,
      proto.XmppSettingsMessage.serializeBinaryToWriter
    );
  }
  f = message.getMovetopositionmessage();
  if (f != null) {
    writer.writeMessage(
      31,
      f,
      proto.MoveToPositionMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional BatchMessage batchMessage = 1;
 * @return {?proto.BatchMessage}
 */
proto.ServerToClientMessage.prototype.getBatchmessage = function() {
  return /** @type{?proto.BatchMessage} */ (
    jspb.Message.getWrapperField(this, proto.BatchMessage, 1));
};


/**
 * @param {?proto.BatchMessage|undefined} value
 * @return {!proto.ServerToClientMessage} returns this
*/
proto.ServerToClientMessage.prototype.setBatchmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.ServerToClientMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ServerToClientMessage} returns this
 */
proto.ServerToClientMessage.prototype.clearBatchmessage = function() {
  return this.setBatchmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ServerToClientMessage.prototype.hasBatchmessage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ErrorMessage errorMessage = 2;
 * @return {?proto.ErrorMessage}
 */
proto.ServerToClientMessage.prototype.getErrormessage = function() {
  return /** @type{?proto.ErrorMessage} */ (
    jspb.Message.getWrapperField(this, proto.ErrorMessage, 2));
};


/**
 * @param {?proto.ErrorMessage|undefined} value
 * @return {!proto.ServerToClientMessage} returns this
*/
proto.ServerToClientMessage.prototype.setErrormessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.ServerToClientMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ServerToClientMessage} returns this
 */
proto.ServerToClientMessage.prototype.clearErrormessage = function() {
  return this.setErrormessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ServerToClientMessage.prototype.hasErrormessage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional RoomJoinedMessage roomJoinedMessage = 3;
 * @return {?proto.RoomJoinedMessage}
 */
proto.ServerToClientMessage.prototype.getRoomjoinedmessage = function() {
  return /** @type{?proto.RoomJoinedMessage} */ (
    jspb.Message.getWrapperField(this, proto.RoomJoinedMessage, 3));
};


/**
 * @param {?proto.RoomJoinedMessage|undefined} value
 * @return {!proto.ServerToClientMessage} returns this
*/
proto.ServerToClientMessage.prototype.setRoomjoinedmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.ServerToClientMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ServerToClientMessage} returns this
 */
proto.ServerToClientMessage.prototype.clearRoomjoinedmessage = function() {
  return this.setRoomjoinedmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ServerToClientMessage.prototype.hasRoomjoinedmessage = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional WebRtcStartMessage webRtcStartMessage = 4;
 * @return {?proto.WebRtcStartMessage}
 */
proto.ServerToClientMessage.prototype.getWebrtcstartmessage = function() {
  return /** @type{?proto.WebRtcStartMessage} */ (
    jspb.Message.getWrapperField(this, proto.WebRtcStartMessage, 4));
};


/**
 * @param {?proto.WebRtcStartMessage|undefined} value
 * @return {!proto.ServerToClientMessage} returns this
*/
proto.ServerToClientMessage.prototype.setWebrtcstartmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.ServerToClientMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ServerToClientMessage} returns this
 */
proto.ServerToClientMessage.prototype.clearWebrtcstartmessage = function() {
  return this.setWebrtcstartmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ServerToClientMessage.prototype.hasWebrtcstartmessage = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional WebRtcSignalToClientMessage webRtcSignalToClientMessage = 5;
 * @return {?proto.WebRtcSignalToClientMessage}
 */
proto.ServerToClientMessage.prototype.getWebrtcsignaltoclientmessage = function() {
  return /** @type{?proto.WebRtcSignalToClientMessage} */ (
    jspb.Message.getWrapperField(this, proto.WebRtcSignalToClientMessage, 5));
};


/**
 * @param {?proto.WebRtcSignalToClientMessage|undefined} value
 * @return {!proto.ServerToClientMessage} returns this
*/
proto.ServerToClientMessage.prototype.setWebrtcsignaltoclientmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.ServerToClientMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ServerToClientMessage} returns this
 */
proto.ServerToClientMessage.prototype.clearWebrtcsignaltoclientmessage = function() {
  return this.setWebrtcsignaltoclientmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ServerToClientMessage.prototype.hasWebrtcsignaltoclientmessage = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional WebRtcSignalToClientMessage webRtcScreenSharingSignalToClientMessage = 6;
 * @return {?proto.WebRtcSignalToClientMessage}
 */
proto.ServerToClientMessage.prototype.getWebrtcscreensharingsignaltoclientmessage = function() {
  return /** @type{?proto.WebRtcSignalToClientMessage} */ (
    jspb.Message.getWrapperField(this, proto.WebRtcSignalToClientMessage, 6));
};


/**
 * @param {?proto.WebRtcSignalToClientMessage|undefined} value
 * @return {!proto.ServerToClientMessage} returns this
*/
proto.ServerToClientMessage.prototype.setWebrtcscreensharingsignaltoclientmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.ServerToClientMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ServerToClientMessage} returns this
 */
proto.ServerToClientMessage.prototype.clearWebrtcscreensharingsignaltoclientmessage = function() {
  return this.setWebrtcscreensharingsignaltoclientmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ServerToClientMessage.prototype.hasWebrtcscreensharingsignaltoclientmessage = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional WebRtcDisconnectMessage webRtcDisconnectMessage = 7;
 * @return {?proto.WebRtcDisconnectMessage}
 */
proto.ServerToClientMessage.prototype.getWebrtcdisconnectmessage = function() {
  return /** @type{?proto.WebRtcDisconnectMessage} */ (
    jspb.Message.getWrapperField(this, proto.WebRtcDisconnectMessage, 7));
};


/**
 * @param {?proto.WebRtcDisconnectMessage|undefined} value
 * @return {!proto.ServerToClientMessage} returns this
*/
proto.ServerToClientMessage.prototype.setWebrtcdisconnectmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.ServerToClientMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ServerToClientMessage} returns this
 */
proto.ServerToClientMessage.prototype.clearWebrtcdisconnectmessage = function() {
  return this.setWebrtcdisconnectmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ServerToClientMessage.prototype.hasWebrtcdisconnectmessage = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional TeleportMessageMessage teleportMessageMessage = 10;
 * @return {?proto.TeleportMessageMessage}
 */
proto.ServerToClientMessage.prototype.getTeleportmessagemessage = function() {
  return /** @type{?proto.TeleportMessageMessage} */ (
    jspb.Message.getWrapperField(this, proto.TeleportMessageMessage, 10));
};


/**
 * @param {?proto.TeleportMessageMessage|undefined} value
 * @return {!proto.ServerToClientMessage} returns this
*/
proto.ServerToClientMessage.prototype.setTeleportmessagemessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.ServerToClientMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ServerToClientMessage} returns this
 */
proto.ServerToClientMessage.prototype.clearTeleportmessagemessage = function() {
  return this.setTeleportmessagemessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ServerToClientMessage.prototype.hasTeleportmessagemessage = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional SendUserMessage sendUserMessage = 12;
 * @return {?proto.SendUserMessage}
 */
proto.ServerToClientMessage.prototype.getSendusermessage = function() {
  return /** @type{?proto.SendUserMessage} */ (
    jspb.Message.getWrapperField(this, proto.SendUserMessage, 12));
};


/**
 * @param {?proto.SendUserMessage|undefined} value
 * @return {!proto.ServerToClientMessage} returns this
*/
proto.ServerToClientMessage.prototype.setSendusermessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.ServerToClientMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ServerToClientMessage} returns this
 */
proto.ServerToClientMessage.prototype.clearSendusermessage = function() {
  return this.setSendusermessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ServerToClientMessage.prototype.hasSendusermessage = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional BanUserMessage banUserMessage = 13;
 * @return {?proto.BanUserMessage}
 */
proto.ServerToClientMessage.prototype.getBanusermessage = function() {
  return /** @type{?proto.BanUserMessage} */ (
    jspb.Message.getWrapperField(this, proto.BanUserMessage, 13));
};


/**
 * @param {?proto.BanUserMessage|undefined} value
 * @return {!proto.ServerToClientMessage} returns this
*/
proto.ServerToClientMessage.prototype.setBanusermessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.ServerToClientMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ServerToClientMessage} returns this
 */
proto.ServerToClientMessage.prototype.clearBanusermessage = function() {
  return this.setBanusermessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ServerToClientMessage.prototype.hasBanusermessage = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional WorldFullWarningMessage worldFullWarningMessage = 15;
 * @return {?proto.WorldFullWarningMessage}
 */
proto.ServerToClientMessage.prototype.getWorldfullwarningmessage = function() {
  return /** @type{?proto.WorldFullWarningMessage} */ (
    jspb.Message.getWrapperField(this, proto.WorldFullWarningMessage, 15));
};


/**
 * @param {?proto.WorldFullWarningMessage|undefined} value
 * @return {!proto.ServerToClientMessage} returns this
*/
proto.ServerToClientMessage.prototype.setWorldfullwarningmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 15, proto.ServerToClientMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ServerToClientMessage} returns this
 */
proto.ServerToClientMessage.prototype.clearWorldfullwarningmessage = function() {
  return this.setWorldfullwarningmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ServerToClientMessage.prototype.hasWorldfullwarningmessage = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional WorldFullMessage worldFullMessage = 16;
 * @return {?proto.WorldFullMessage}
 */
proto.ServerToClientMessage.prototype.getWorldfullmessage = function() {
  return /** @type{?proto.WorldFullMessage} */ (
    jspb.Message.getWrapperField(this, proto.WorldFullMessage, 16));
};


/**
 * @param {?proto.WorldFullMessage|undefined} value
 * @return {!proto.ServerToClientMessage} returns this
*/
proto.ServerToClientMessage.prototype.setWorldfullmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 16, proto.ServerToClientMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ServerToClientMessage} returns this
 */
proto.ServerToClientMessage.prototype.clearWorldfullmessage = function() {
  return this.setWorldfullmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ServerToClientMessage.prototype.hasWorldfullmessage = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional RefreshRoomMessage refreshRoomMessage = 17;
 * @return {?proto.RefreshRoomMessage}
 */
proto.ServerToClientMessage.prototype.getRefreshroommessage = function() {
  return /** @type{?proto.RefreshRoomMessage} */ (
    jspb.Message.getWrapperField(this, proto.RefreshRoomMessage, 17));
};


/**
 * @param {?proto.RefreshRoomMessage|undefined} value
 * @return {!proto.ServerToClientMessage} returns this
*/
proto.ServerToClientMessage.prototype.setRefreshroommessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 17, proto.ServerToClientMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ServerToClientMessage} returns this
 */
proto.ServerToClientMessage.prototype.clearRefreshroommessage = function() {
  return this.setRefreshroommessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ServerToClientMessage.prototype.hasRefreshroommessage = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional WorldConnexionMessage worldConnexionMessage = 18;
 * @return {?proto.WorldConnexionMessage}
 */
proto.ServerToClientMessage.prototype.getWorldconnexionmessage = function() {
  return /** @type{?proto.WorldConnexionMessage} */ (
    jspb.Message.getWrapperField(this, proto.WorldConnexionMessage, 18));
};


/**
 * @param {?proto.WorldConnexionMessage|undefined} value
 * @return {!proto.ServerToClientMessage} returns this
*/
proto.ServerToClientMessage.prototype.setWorldconnexionmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 18, proto.ServerToClientMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ServerToClientMessage} returns this
 */
proto.ServerToClientMessage.prototype.clearWorldconnexionmessage = function() {
  return this.setWorldconnexionmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ServerToClientMessage.prototype.hasWorldconnexionmessage = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional TokenExpiredMessage tokenExpiredMessage = 20;
 * @return {?proto.TokenExpiredMessage}
 */
proto.ServerToClientMessage.prototype.getTokenexpiredmessage = function() {
  return /** @type{?proto.TokenExpiredMessage} */ (
    jspb.Message.getWrapperField(this, proto.TokenExpiredMessage, 20));
};


/**
 * @param {?proto.TokenExpiredMessage|undefined} value
 * @return {!proto.ServerToClientMessage} returns this
*/
proto.ServerToClientMessage.prototype.setTokenexpiredmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 20, proto.ServerToClientMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ServerToClientMessage} returns this
 */
proto.ServerToClientMessage.prototype.clearTokenexpiredmessage = function() {
  return this.setTokenexpiredmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ServerToClientMessage.prototype.hasTokenexpiredmessage = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional FollowRequestMessage followRequestMessage = 21;
 * @return {?proto.FollowRequestMessage}
 */
proto.ServerToClientMessage.prototype.getFollowrequestmessage = function() {
  return /** @type{?proto.FollowRequestMessage} */ (
    jspb.Message.getWrapperField(this, proto.FollowRequestMessage, 21));
};


/**
 * @param {?proto.FollowRequestMessage|undefined} value
 * @return {!proto.ServerToClientMessage} returns this
*/
proto.ServerToClientMessage.prototype.setFollowrequestmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 21, proto.ServerToClientMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ServerToClientMessage} returns this
 */
proto.ServerToClientMessage.prototype.clearFollowrequestmessage = function() {
  return this.setFollowrequestmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ServerToClientMessage.prototype.hasFollowrequestmessage = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional FollowConfirmationMessage followConfirmationMessage = 22;
 * @return {?proto.FollowConfirmationMessage}
 */
proto.ServerToClientMessage.prototype.getFollowconfirmationmessage = function() {
  return /** @type{?proto.FollowConfirmationMessage} */ (
    jspb.Message.getWrapperField(this, proto.FollowConfirmationMessage, 22));
};


/**
 * @param {?proto.FollowConfirmationMessage|undefined} value
 * @return {!proto.ServerToClientMessage} returns this
*/
proto.ServerToClientMessage.prototype.setFollowconfirmationmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 22, proto.ServerToClientMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ServerToClientMessage} returns this
 */
proto.ServerToClientMessage.prototype.clearFollowconfirmationmessage = function() {
  return this.setFollowconfirmationmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ServerToClientMessage.prototype.hasFollowconfirmationmessage = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional FollowAbortMessage followAbortMessage = 23;
 * @return {?proto.FollowAbortMessage}
 */
proto.ServerToClientMessage.prototype.getFollowabortmessage = function() {
  return /** @type{?proto.FollowAbortMessage} */ (
    jspb.Message.getWrapperField(this, proto.FollowAbortMessage, 23));
};


/**
 * @param {?proto.FollowAbortMessage|undefined} value
 * @return {!proto.ServerToClientMessage} returns this
*/
proto.ServerToClientMessage.prototype.setFollowabortmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 23, proto.ServerToClientMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ServerToClientMessage} returns this
 */
proto.ServerToClientMessage.prototype.clearFollowabortmessage = function() {
  return this.setFollowabortmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ServerToClientMessage.prototype.hasFollowabortmessage = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional InvalidTextureMessage invalidTextureMessage = 24;
 * @return {?proto.InvalidTextureMessage}
 */
proto.ServerToClientMessage.prototype.getInvalidtexturemessage = function() {
  return /** @type{?proto.InvalidTextureMessage} */ (
    jspb.Message.getWrapperField(this, proto.InvalidTextureMessage, 24));
};


/**
 * @param {?proto.InvalidTextureMessage|undefined} value
 * @return {!proto.ServerToClientMessage} returns this
*/
proto.ServerToClientMessage.prototype.setInvalidtexturemessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 24, proto.ServerToClientMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ServerToClientMessage} returns this
 */
proto.ServerToClientMessage.prototype.clearInvalidtexturemessage = function() {
  return this.setInvalidtexturemessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ServerToClientMessage.prototype.hasInvalidtexturemessage = function() {
  return jspb.Message.getField(this, 24) != null;
};


/**
 * optional GroupUsersUpdateMessage groupUsersUpdateMessage = 25;
 * @return {?proto.GroupUsersUpdateMessage}
 */
proto.ServerToClientMessage.prototype.getGroupusersupdatemessage = function() {
  return /** @type{?proto.GroupUsersUpdateMessage} */ (
    jspb.Message.getWrapperField(this, proto.GroupUsersUpdateMessage, 25));
};


/**
 * @param {?proto.GroupUsersUpdateMessage|undefined} value
 * @return {!proto.ServerToClientMessage} returns this
*/
proto.ServerToClientMessage.prototype.setGroupusersupdatemessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 25, proto.ServerToClientMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ServerToClientMessage} returns this
 */
proto.ServerToClientMessage.prototype.clearGroupusersupdatemessage = function() {
  return this.setGroupusersupdatemessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ServerToClientMessage.prototype.hasGroupusersupdatemessage = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional ErrorScreenMessage errorScreenMessage = 26;
 * @return {?proto.ErrorScreenMessage}
 */
proto.ServerToClientMessage.prototype.getErrorscreenmessage = function() {
  return /** @type{?proto.ErrorScreenMessage} */ (
    jspb.Message.getWrapperField(this, proto.ErrorScreenMessage, 26));
};


/**
 * @param {?proto.ErrorScreenMessage|undefined} value
 * @return {!proto.ServerToClientMessage} returns this
*/
proto.ServerToClientMessage.prototype.setErrorscreenmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 26, proto.ServerToClientMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ServerToClientMessage} returns this
 */
proto.ServerToClientMessage.prototype.clearErrorscreenmessage = function() {
  return this.setErrorscreenmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ServerToClientMessage.prototype.hasErrorscreenmessage = function() {
  return jspb.Message.getField(this, 26) != null;
};


/**
 * optional AnswerMessage answerMessage = 28;
 * @return {?proto.AnswerMessage}
 */
proto.ServerToClientMessage.prototype.getAnswermessage = function() {
  return /** @type{?proto.AnswerMessage} */ (
    jspb.Message.getWrapperField(this, proto.AnswerMessage, 28));
};


/**
 * @param {?proto.AnswerMessage|undefined} value
 * @return {!proto.ServerToClientMessage} returns this
*/
proto.ServerToClientMessage.prototype.setAnswermessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 28, proto.ServerToClientMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ServerToClientMessage} returns this
 */
proto.ServerToClientMessage.prototype.clearAnswermessage = function() {
  return this.setAnswermessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ServerToClientMessage.prototype.hasAnswermessage = function() {
  return jspb.Message.getField(this, 28) != null;
};


/**
 * optional XmppSettingsMessage xmppSettingsMessage = 29;
 * @return {?proto.XmppSettingsMessage}
 */
proto.ServerToClientMessage.prototype.getXmppsettingsmessage = function() {
  return /** @type{?proto.XmppSettingsMessage} */ (
    jspb.Message.getWrapperField(this, proto.XmppSettingsMessage, 29));
};


/**
 * @param {?proto.XmppSettingsMessage|undefined} value
 * @return {!proto.ServerToClientMessage} returns this
*/
proto.ServerToClientMessage.prototype.setXmppsettingsmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 29, proto.ServerToClientMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ServerToClientMessage} returns this
 */
proto.ServerToClientMessage.prototype.clearXmppsettingsmessage = function() {
  return this.setXmppsettingsmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ServerToClientMessage.prototype.hasXmppsettingsmessage = function() {
  return jspb.Message.getField(this, 29) != null;
};


/**
 * optional MoveToPositionMessage moveToPositionMessage = 31;
 * @return {?proto.MoveToPositionMessage}
 */
proto.ServerToClientMessage.prototype.getMovetopositionmessage = function() {
  return /** @type{?proto.MoveToPositionMessage} */ (
    jspb.Message.getWrapperField(this, proto.MoveToPositionMessage, 31));
};


/**
 * @param {?proto.MoveToPositionMessage|undefined} value
 * @return {!proto.ServerToClientMessage} returns this
*/
proto.ServerToClientMessage.prototype.setMovetopositionmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 31, proto.ServerToClientMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ServerToClientMessage} returns this
 */
proto.ServerToClientMessage.prototype.clearMovetopositionmessage = function() {
  return this.setMovetopositionmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ServerToClientMessage.prototype.hasMovetopositionmessage = function() {
  return jspb.Message.getField(this, 31) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.JoinRoomMessage.repeatedFields_ = [3,6,14];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JoinRoomMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.JoinRoomMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JoinRoomMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoinRoomMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    positionmessage: (f = msg.getPositionmessage()) && proto.PositionMessage.toObject(includeInstance, f),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    characterlayerList: jspb.Message.toObjectList(msg.getCharacterlayerList(),
    proto.CharacterLayerMessage.toObject, includeInstance),
    useruuid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    roomid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    tagList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
    ipaddress: jspb.Message.getFieldWithDefault(msg, 7, ""),
    companion: (f = msg.getCompanion()) && proto.CompanionMessage.toObject(includeInstance, f),
    visitcardurl: jspb.Message.getFieldWithDefault(msg, 9, ""),
    userroomtoken: jspb.Message.getFieldWithDefault(msg, 10, ""),
    availabilitystatus: jspb.Message.getFieldWithDefault(msg, 11, 0),
    activatedinviteuser: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
    islogged: jspb.Message.getBooleanFieldWithDefault(msg, 13, false),
    applicationsList: jspb.Message.toObjectList(msg.getApplicationsList(),
    proto.ApplicationMessage.toObject, includeInstance),
    userjid: jspb.Message.getFieldWithDefault(msg, 15, ""),
    lastcommandid: jspb.Message.getFieldWithDefault(msg, 16, ""),
    canedit: jspb.Message.getBooleanFieldWithDefault(msg, 17, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JoinRoomMessage}
 */
proto.JoinRoomMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JoinRoomMessage;
  return proto.JoinRoomMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JoinRoomMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JoinRoomMessage}
 */
proto.JoinRoomMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.PositionMessage;
      reader.readMessage(value,proto.PositionMessage.deserializeBinaryFromReader);
      msg.setPositionmessage(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = new proto.CharacterLayerMessage;
      reader.readMessage(value,proto.CharacterLayerMessage.deserializeBinaryFromReader);
      msg.addCharacterlayer(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUseruuid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoomid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addTag(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setIpaddress(value);
      break;
    case 8:
      var value = new proto.CompanionMessage;
      reader.readMessage(value,proto.CompanionMessage.deserializeBinaryFromReader);
      msg.setCompanion(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setVisitcardurl(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserroomtoken(value);
      break;
    case 11:
      var value = /** @type {!proto.AvailabilityStatus} */ (reader.readEnum());
      msg.setAvailabilitystatus(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setActivatedinviteuser(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIslogged(value);
      break;
    case 14:
      var value = new proto.ApplicationMessage;
      reader.readMessage(value,proto.ApplicationMessage.deserializeBinaryFromReader);
      msg.addApplications(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserjid(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastcommandid(value);
      break;
    case 17:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCanedit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JoinRoomMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JoinRoomMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JoinRoomMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoinRoomMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPositionmessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.PositionMessage.serializeBinaryToWriter
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCharacterlayerList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.CharacterLayerMessage.serializeBinaryToWriter
    );
  }
  f = message.getUseruuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getRoomid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTagList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = message.getIpaddress();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getCompanion();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.CompanionMessage.serializeBinaryToWriter
    );
  }
  f = message.getVisitcardurl();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getUserroomtoken();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getAvailabilitystatus();
  if (f !== 0.0) {
    writer.writeEnum(
      11,
      f
    );
  }
  f = message.getActivatedinviteuser();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getIslogged();
  if (f) {
    writer.writeBool(
      13,
      f
    );
  }
  f = message.getApplicationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      14,
      f,
      proto.ApplicationMessage.serializeBinaryToWriter
    );
  }
  f = message.getUserjid();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getLastcommandid();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getCanedit();
  if (f) {
    writer.writeBool(
      17,
      f
    );
  }
};


/**
 * optional PositionMessage positionMessage = 1;
 * @return {?proto.PositionMessage}
 */
proto.JoinRoomMessage.prototype.getPositionmessage = function() {
  return /** @type{?proto.PositionMessage} */ (
    jspb.Message.getWrapperField(this, proto.PositionMessage, 1));
};


/**
 * @param {?proto.PositionMessage|undefined} value
 * @return {!proto.JoinRoomMessage} returns this
*/
proto.JoinRoomMessage.prototype.setPositionmessage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.JoinRoomMessage} returns this
 */
proto.JoinRoomMessage.prototype.clearPositionmessage = function() {
  return this.setPositionmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.JoinRoomMessage.prototype.hasPositionmessage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.JoinRoomMessage.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.JoinRoomMessage} returns this
 */
proto.JoinRoomMessage.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated CharacterLayerMessage characterLayer = 3;
 * @return {!Array<!proto.CharacterLayerMessage>}
 */
proto.JoinRoomMessage.prototype.getCharacterlayerList = function() {
  return /** @type{!Array<!proto.CharacterLayerMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.CharacterLayerMessage, 3));
};


/**
 * @param {!Array<!proto.CharacterLayerMessage>} value
 * @return {!proto.JoinRoomMessage} returns this
*/
proto.JoinRoomMessage.prototype.setCharacterlayerList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.CharacterLayerMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.CharacterLayerMessage}
 */
proto.JoinRoomMessage.prototype.addCharacterlayer = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.CharacterLayerMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.JoinRoomMessage} returns this
 */
proto.JoinRoomMessage.prototype.clearCharacterlayerList = function() {
  return this.setCharacterlayerList([]);
};


/**
 * optional string userUuid = 4;
 * @return {string}
 */
proto.JoinRoomMessage.prototype.getUseruuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.JoinRoomMessage} returns this
 */
proto.JoinRoomMessage.prototype.setUseruuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string roomId = 5;
 * @return {string}
 */
proto.JoinRoomMessage.prototype.getRoomid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.JoinRoomMessage} returns this
 */
proto.JoinRoomMessage.prototype.setRoomid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated string tag = 6;
 * @return {!Array<string>}
 */
proto.JoinRoomMessage.prototype.getTagList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.JoinRoomMessage} returns this
 */
proto.JoinRoomMessage.prototype.setTagList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.JoinRoomMessage} returns this
 */
proto.JoinRoomMessage.prototype.addTag = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.JoinRoomMessage} returns this
 */
proto.JoinRoomMessage.prototype.clearTagList = function() {
  return this.setTagList([]);
};


/**
 * optional string IPAddress = 7;
 * @return {string}
 */
proto.JoinRoomMessage.prototype.getIpaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.JoinRoomMessage} returns this
 */
proto.JoinRoomMessage.prototype.setIpaddress = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional CompanionMessage companion = 8;
 * @return {?proto.CompanionMessage}
 */
proto.JoinRoomMessage.prototype.getCompanion = function() {
  return /** @type{?proto.CompanionMessage} */ (
    jspb.Message.getWrapperField(this, proto.CompanionMessage, 8));
};


/**
 * @param {?proto.CompanionMessage|undefined} value
 * @return {!proto.JoinRoomMessage} returns this
*/
proto.JoinRoomMessage.prototype.setCompanion = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.JoinRoomMessage} returns this
 */
proto.JoinRoomMessage.prototype.clearCompanion = function() {
  return this.setCompanion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.JoinRoomMessage.prototype.hasCompanion = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string visitCardUrl = 9;
 * @return {string}
 */
proto.JoinRoomMessage.prototype.getVisitcardurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.JoinRoomMessage} returns this
 */
proto.JoinRoomMessage.prototype.setVisitcardurl = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string userRoomToken = 10;
 * @return {string}
 */
proto.JoinRoomMessage.prototype.getUserroomtoken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.JoinRoomMessage} returns this
 */
proto.JoinRoomMessage.prototype.setUserroomtoken = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional AvailabilityStatus availabilityStatus = 11;
 * @return {!proto.AvailabilityStatus}
 */
proto.JoinRoomMessage.prototype.getAvailabilitystatus = function() {
  return /** @type {!proto.AvailabilityStatus} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {!proto.AvailabilityStatus} value
 * @return {!proto.JoinRoomMessage} returns this
 */
proto.JoinRoomMessage.prototype.setAvailabilitystatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 11, value);
};


/**
 * optional bool activatedInviteUser = 12;
 * @return {boolean}
 */
proto.JoinRoomMessage.prototype.getActivatedinviteuser = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.JoinRoomMessage} returns this
 */
proto.JoinRoomMessage.prototype.setActivatedinviteuser = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional bool isLogged = 13;
 * @return {boolean}
 */
proto.JoinRoomMessage.prototype.getIslogged = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.JoinRoomMessage} returns this
 */
proto.JoinRoomMessage.prototype.setIslogged = function(value) {
  return jspb.Message.setProto3BooleanField(this, 13, value);
};


/**
 * repeated ApplicationMessage applications = 14;
 * @return {!Array<!proto.ApplicationMessage>}
 */
proto.JoinRoomMessage.prototype.getApplicationsList = function() {
  return /** @type{!Array<!proto.ApplicationMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.ApplicationMessage, 14));
};


/**
 * @param {!Array<!proto.ApplicationMessage>} value
 * @return {!proto.JoinRoomMessage} returns this
*/
proto.JoinRoomMessage.prototype.setApplicationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 14, value);
};


/**
 * @param {!proto.ApplicationMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.ApplicationMessage}
 */
proto.JoinRoomMessage.prototype.addApplications = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 14, opt_value, proto.ApplicationMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.JoinRoomMessage} returns this
 */
proto.JoinRoomMessage.prototype.clearApplicationsList = function() {
  return this.setApplicationsList([]);
};


/**
 * optional string userJid = 15;
 * @return {string}
 */
proto.JoinRoomMessage.prototype.getUserjid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.JoinRoomMessage} returns this
 */
proto.JoinRoomMessage.prototype.setUserjid = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string lastCommandId = 16;
 * @return {string}
 */
proto.JoinRoomMessage.prototype.getLastcommandid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.JoinRoomMessage} returns this
 */
proto.JoinRoomMessage.prototype.setLastcommandid = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional bool canEdit = 17;
 * @return {boolean}
 */
proto.JoinRoomMessage.prototype.getCanedit = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 17, false));
};


/**
 * @param {boolean} value
 * @return {!proto.JoinRoomMessage} returns this
 */
proto.JoinRoomMessage.prototype.setCanedit = function(value) {
  return jspb.Message.setProto3BooleanField(this, 17, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.UserJoinedZoneMessage.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.UserJoinedZoneMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.UserJoinedZoneMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.UserJoinedZoneMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UserJoinedZoneMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    userid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    userjid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    characterlayersList: jspb.Message.toObjectList(msg.getCharacterlayersList(),
    proto.CharacterLayerMessage.toObject, includeInstance),
    position: (f = msg.getPosition()) && proto.PositionMessage.toObject(includeInstance, f),
    fromzone: (f = msg.getFromzone()) && proto.Zone.toObject(includeInstance, f),
    companion: (f = msg.getCompanion()) && proto.CompanionMessage.toObject(includeInstance, f),
    visitcardurl: jspb.Message.getFieldWithDefault(msg, 8, ""),
    useruuid: jspb.Message.getFieldWithDefault(msg, 9, ""),
    outlinecolor: jspb.Message.getFieldWithDefault(msg, 10, 0),
    hasoutline: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    availabilitystatus: jspb.Message.getFieldWithDefault(msg, 12, 0),
    variablesMap: (f = msg.getVariablesMap()) ? f.toObject(includeInstance, undefined) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.UserJoinedZoneMessage}
 */
proto.UserJoinedZoneMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.UserJoinedZoneMessage;
  return proto.UserJoinedZoneMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.UserJoinedZoneMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.UserJoinedZoneMessage}
 */
proto.UserJoinedZoneMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUserid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserjid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = new proto.CharacterLayerMessage;
      reader.readMessage(value,proto.CharacterLayerMessage.deserializeBinaryFromReader);
      msg.addCharacterlayers(value);
      break;
    case 5:
      var value = new proto.PositionMessage;
      reader.readMessage(value,proto.PositionMessage.deserializeBinaryFromReader);
      msg.setPosition(value);
      break;
    case 6:
      var value = new proto.Zone;
      reader.readMessage(value,proto.Zone.deserializeBinaryFromReader);
      msg.setFromzone(value);
      break;
    case 7:
      var value = new proto.CompanionMessage;
      reader.readMessage(value,proto.CompanionMessage.deserializeBinaryFromReader);
      msg.setCompanion(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setVisitcardurl(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setUseruuid(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setOutlinecolor(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasoutline(value);
      break;
    case 12:
      var value = /** @type {!proto.AvailabilityStatus} */ (reader.readEnum());
      msg.setAvailabilitystatus(value);
      break;
    case 13:
      var value = msg.getVariablesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readString, null, "", "");
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.UserJoinedZoneMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.UserJoinedZoneMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.UserJoinedZoneMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UserJoinedZoneMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getUserjid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCharacterlayersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.CharacterLayerMessage.serializeBinaryToWriter
    );
  }
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.PositionMessage.serializeBinaryToWriter
    );
  }
  f = message.getFromzone();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.Zone.serializeBinaryToWriter
    );
  }
  f = message.getCompanion();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.CompanionMessage.serializeBinaryToWriter
    );
  }
  f = message.getVisitcardurl();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getUseruuid();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getOutlinecolor();
  if (f !== 0) {
    writer.writeUint32(
      10,
      f
    );
  }
  f = message.getHasoutline();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getAvailabilitystatus();
  if (f !== 0.0) {
    writer.writeEnum(
      12,
      f
    );
  }
  f = message.getVariablesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(13, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeString);
  }
};


/**
 * optional int32 userId = 1;
 * @return {number}
 */
proto.UserJoinedZoneMessage.prototype.getUserid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.UserJoinedZoneMessage} returns this
 */
proto.UserJoinedZoneMessage.prototype.setUserid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string userJid = 2;
 * @return {string}
 */
proto.UserJoinedZoneMessage.prototype.getUserjid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.UserJoinedZoneMessage} returns this
 */
proto.UserJoinedZoneMessage.prototype.setUserjid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.UserJoinedZoneMessage.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.UserJoinedZoneMessage} returns this
 */
proto.UserJoinedZoneMessage.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated CharacterLayerMessage characterLayers = 4;
 * @return {!Array<!proto.CharacterLayerMessage>}
 */
proto.UserJoinedZoneMessage.prototype.getCharacterlayersList = function() {
  return /** @type{!Array<!proto.CharacterLayerMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.CharacterLayerMessage, 4));
};


/**
 * @param {!Array<!proto.CharacterLayerMessage>} value
 * @return {!proto.UserJoinedZoneMessage} returns this
*/
proto.UserJoinedZoneMessage.prototype.setCharacterlayersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.CharacterLayerMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.CharacterLayerMessage}
 */
proto.UserJoinedZoneMessage.prototype.addCharacterlayers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.CharacterLayerMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.UserJoinedZoneMessage} returns this
 */
proto.UserJoinedZoneMessage.prototype.clearCharacterlayersList = function() {
  return this.setCharacterlayersList([]);
};


/**
 * optional PositionMessage position = 5;
 * @return {?proto.PositionMessage}
 */
proto.UserJoinedZoneMessage.prototype.getPosition = function() {
  return /** @type{?proto.PositionMessage} */ (
    jspb.Message.getWrapperField(this, proto.PositionMessage, 5));
};


/**
 * @param {?proto.PositionMessage|undefined} value
 * @return {!proto.UserJoinedZoneMessage} returns this
*/
proto.UserJoinedZoneMessage.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.UserJoinedZoneMessage} returns this
 */
proto.UserJoinedZoneMessage.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.UserJoinedZoneMessage.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Zone fromZone = 6;
 * @return {?proto.Zone}
 */
proto.UserJoinedZoneMessage.prototype.getFromzone = function() {
  return /** @type{?proto.Zone} */ (
    jspb.Message.getWrapperField(this, proto.Zone, 6));
};


/**
 * @param {?proto.Zone|undefined} value
 * @return {!proto.UserJoinedZoneMessage} returns this
*/
proto.UserJoinedZoneMessage.prototype.setFromzone = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.UserJoinedZoneMessage} returns this
 */
proto.UserJoinedZoneMessage.prototype.clearFromzone = function() {
  return this.setFromzone(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.UserJoinedZoneMessage.prototype.hasFromzone = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional CompanionMessage companion = 7;
 * @return {?proto.CompanionMessage}
 */
proto.UserJoinedZoneMessage.prototype.getCompanion = function() {
  return /** @type{?proto.CompanionMessage} */ (
    jspb.Message.getWrapperField(this, proto.CompanionMessage, 7));
};


/**
 * @param {?proto.CompanionMessage|undefined} value
 * @return {!proto.UserJoinedZoneMessage} returns this
*/
proto.UserJoinedZoneMessage.prototype.setCompanion = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.UserJoinedZoneMessage} returns this
 */
proto.UserJoinedZoneMessage.prototype.clearCompanion = function() {
  return this.setCompanion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.UserJoinedZoneMessage.prototype.hasCompanion = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string visitCardUrl = 8;
 * @return {string}
 */
proto.UserJoinedZoneMessage.prototype.getVisitcardurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.UserJoinedZoneMessage} returns this
 */
proto.UserJoinedZoneMessage.prototype.setVisitcardurl = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string userUuid = 9;
 * @return {string}
 */
proto.UserJoinedZoneMessage.prototype.getUseruuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.UserJoinedZoneMessage} returns this
 */
proto.UserJoinedZoneMessage.prototype.setUseruuid = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional uint32 outlineColor = 10;
 * @return {number}
 */
proto.UserJoinedZoneMessage.prototype.getOutlinecolor = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.UserJoinedZoneMessage} returns this
 */
proto.UserJoinedZoneMessage.prototype.setOutlinecolor = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional bool hasOutline = 11;
 * @return {boolean}
 */
proto.UserJoinedZoneMessage.prototype.getHasoutline = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.UserJoinedZoneMessage} returns this
 */
proto.UserJoinedZoneMessage.prototype.setHasoutline = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional AvailabilityStatus availabilityStatus = 12;
 * @return {!proto.AvailabilityStatus}
 */
proto.UserJoinedZoneMessage.prototype.getAvailabilitystatus = function() {
  return /** @type {!proto.AvailabilityStatus} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {!proto.AvailabilityStatus} value
 * @return {!proto.UserJoinedZoneMessage} returns this
 */
proto.UserJoinedZoneMessage.prototype.setAvailabilitystatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 12, value);
};


/**
 * map<string, string> variables = 13;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,string>}
 */
proto.UserJoinedZoneMessage.prototype.getVariablesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,string>} */ (
      jspb.Message.getMapField(this, 13, opt_noLazyCreate,
      null));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.UserJoinedZoneMessage} returns this
 */
proto.UserJoinedZoneMessage.prototype.clearVariablesMap = function() {
  this.getVariablesMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.UserLeftZoneMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.UserLeftZoneMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.UserLeftZoneMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UserLeftZoneMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    userid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    tozone: (f = msg.getTozone()) && proto.Zone.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.UserLeftZoneMessage}
 */
proto.UserLeftZoneMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.UserLeftZoneMessage;
  return proto.UserLeftZoneMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.UserLeftZoneMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.UserLeftZoneMessage}
 */
proto.UserLeftZoneMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUserid(value);
      break;
    case 2:
      var value = new proto.Zone;
      reader.readMessage(value,proto.Zone.deserializeBinaryFromReader);
      msg.setTozone(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.UserLeftZoneMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.UserLeftZoneMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.UserLeftZoneMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UserLeftZoneMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getTozone();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.Zone.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 userId = 1;
 * @return {number}
 */
proto.UserLeftZoneMessage.prototype.getUserid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.UserLeftZoneMessage} returns this
 */
proto.UserLeftZoneMessage.prototype.setUserid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Zone toZone = 2;
 * @return {?proto.Zone}
 */
proto.UserLeftZoneMessage.prototype.getTozone = function() {
  return /** @type{?proto.Zone} */ (
    jspb.Message.getWrapperField(this, proto.Zone, 2));
};


/**
 * @param {?proto.Zone|undefined} value
 * @return {!proto.UserLeftZoneMessage} returns this
*/
proto.UserLeftZoneMessage.prototype.setTozone = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.UserLeftZoneMessage} returns this
 */
proto.UserLeftZoneMessage.prototype.clearTozone = function() {
  return this.setTozone(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.UserLeftZoneMessage.prototype.hasTozone = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GroupUpdateZoneMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.GroupUpdateZoneMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GroupUpdateZoneMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GroupUpdateZoneMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    groupid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    position: (f = msg.getPosition()) && proto.PointMessage.toObject(includeInstance, f),
    groupsize: jspb.Message.getFieldWithDefault(msg, 3, 0),
    fromzone: (f = msg.getFromzone()) && proto.Zone.toObject(includeInstance, f),
    locked: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GroupUpdateZoneMessage}
 */
proto.GroupUpdateZoneMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GroupUpdateZoneMessage;
  return proto.GroupUpdateZoneMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GroupUpdateZoneMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GroupUpdateZoneMessage}
 */
proto.GroupUpdateZoneMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGroupid(value);
      break;
    case 2:
      var value = new proto.PointMessage;
      reader.readMessage(value,proto.PointMessage.deserializeBinaryFromReader);
      msg.setPosition(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGroupsize(value);
      break;
    case 4:
      var value = new proto.Zone;
      reader.readMessage(value,proto.Zone.deserializeBinaryFromReader);
      msg.setFromzone(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLocked(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GroupUpdateZoneMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GroupUpdateZoneMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GroupUpdateZoneMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GroupUpdateZoneMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPosition();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.PointMessage.serializeBinaryToWriter
    );
  }
  f = message.getGroupsize();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getFromzone();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.Zone.serializeBinaryToWriter
    );
  }
  f = message.getLocked();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional int32 groupId = 1;
 * @return {number}
 */
proto.GroupUpdateZoneMessage.prototype.getGroupid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.GroupUpdateZoneMessage} returns this
 */
proto.GroupUpdateZoneMessage.prototype.setGroupid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional PointMessage position = 2;
 * @return {?proto.PointMessage}
 */
proto.GroupUpdateZoneMessage.prototype.getPosition = function() {
  return /** @type{?proto.PointMessage} */ (
    jspb.Message.getWrapperField(this, proto.PointMessage, 2));
};


/**
 * @param {?proto.PointMessage|undefined} value
 * @return {!proto.GroupUpdateZoneMessage} returns this
*/
proto.GroupUpdateZoneMessage.prototype.setPosition = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.GroupUpdateZoneMessage} returns this
 */
proto.GroupUpdateZoneMessage.prototype.clearPosition = function() {
  return this.setPosition(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.GroupUpdateZoneMessage.prototype.hasPosition = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 groupSize = 3;
 * @return {number}
 */
proto.GroupUpdateZoneMessage.prototype.getGroupsize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.GroupUpdateZoneMessage} returns this
 */
proto.GroupUpdateZoneMessage.prototype.setGroupsize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional Zone fromZone = 4;
 * @return {?proto.Zone}
 */
proto.GroupUpdateZoneMessage.prototype.getFromzone = function() {
  return /** @type{?proto.Zone} */ (
    jspb.Message.getWrapperField(this, proto.Zone, 4));
};


/**
 * @param {?proto.Zone|undefined} value
 * @return {!proto.GroupUpdateZoneMessage} returns this
*/
proto.GroupUpdateZoneMessage.prototype.setFromzone = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.GroupUpdateZoneMessage} returns this
 */
proto.GroupUpdateZoneMessage.prototype.clearFromzone = function() {
  return this.setFromzone(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.GroupUpdateZoneMessage.prototype.hasFromzone = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool locked = 5;
 * @return {boolean}
 */
proto.GroupUpdateZoneMessage.prototype.getLocked = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.GroupUpdateZoneMessage} returns this
 */
proto.GroupUpdateZoneMessage.prototype.setLocked = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.GroupLeftZoneMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.GroupLeftZoneMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.GroupLeftZoneMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GroupLeftZoneMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    groupid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    tozone: (f = msg.getTozone()) && proto.Zone.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.GroupLeftZoneMessage}
 */
proto.GroupLeftZoneMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.GroupLeftZoneMessage;
  return proto.GroupLeftZoneMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.GroupLeftZoneMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.GroupLeftZoneMessage}
 */
proto.GroupLeftZoneMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setGroupid(value);
      break;
    case 2:
      var value = new proto.Zone;
      reader.readMessage(value,proto.Zone.deserializeBinaryFromReader);
      msg.setTozone(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.GroupLeftZoneMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.GroupLeftZoneMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.GroupLeftZoneMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.GroupLeftZoneMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGroupid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getTozone();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.Zone.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 groupId = 1;
 * @return {number}
 */
proto.GroupLeftZoneMessage.prototype.getGroupid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.GroupLeftZoneMessage} returns this
 */
proto.GroupLeftZoneMessage.prototype.setGroupid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional Zone toZone = 2;
 * @return {?proto.Zone}
 */
proto.GroupLeftZoneMessage.prototype.getTozone = function() {
  return /** @type{?proto.Zone} */ (
    jspb.Message.getWrapperField(this, proto.Zone, 2));
};


/**
 * @param {?proto.Zone|undefined} value
 * @return {!proto.GroupLeftZoneMessage} returns this
*/
proto.GroupLeftZoneMessage.prototype.setTozone = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.GroupLeftZoneMessage} returns this
 */
proto.GroupLeftZoneMessage.prototype.clearTozone = function() {
  return this.setTozone(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.GroupLeftZoneMessage.prototype.hasTozone = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PlayerDetailsUpdatedMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.PlayerDetailsUpdatedMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PlayerDetailsUpdatedMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PlayerDetailsUpdatedMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    userid: jspb.Message.getFieldWithDefault(msg, 1, 0),
    details: (f = msg.getDetails()) && proto.SetPlayerDetailsMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PlayerDetailsUpdatedMessage}
 */
proto.PlayerDetailsUpdatedMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PlayerDetailsUpdatedMessage;
  return proto.PlayerDetailsUpdatedMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PlayerDetailsUpdatedMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PlayerDetailsUpdatedMessage}
 */
proto.PlayerDetailsUpdatedMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUserid(value);
      break;
    case 2:
      var value = new proto.SetPlayerDetailsMessage;
      reader.readMessage(value,proto.SetPlayerDetailsMessage.deserializeBinaryFromReader);
      msg.setDetails(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PlayerDetailsUpdatedMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PlayerDetailsUpdatedMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PlayerDetailsUpdatedMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PlayerDetailsUpdatedMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserid();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getDetails();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.SetPlayerDetailsMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 userId = 1;
 * @return {number}
 */
proto.PlayerDetailsUpdatedMessage.prototype.getUserid = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.PlayerDetailsUpdatedMessage} returns this
 */
proto.PlayerDetailsUpdatedMessage.prototype.setUserid = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional SetPlayerDetailsMessage details = 2;
 * @return {?proto.SetPlayerDetailsMessage}
 */
proto.PlayerDetailsUpdatedMessage.prototype.getDetails = function() {
  return /** @type{?proto.SetPlayerDetailsMessage} */ (
    jspb.Message.getWrapperField(this, proto.SetPlayerDetailsMessage, 2));
};


/**
 * @param {?proto.SetPlayerDetailsMessage|undefined} value
 * @return {!proto.PlayerDetailsUpdatedMessage} returns this
*/
proto.PlayerDetailsUpdatedMessage.prototype.setDetails = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PlayerDetailsUpdatedMessage} returns this
 */
proto.PlayerDetailsUpdatedMessage.prototype.clearDetails = function() {
  return this.setDetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PlayerDetailsUpdatedMessage.prototype.hasDetails = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.Zone.prototype.toObject = function(opt_includeInstance) {
  return proto.Zone.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.Zone} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Zone.toObject = function(includeInstance, msg) {
  var f, obj = {
    x: jspb.Message.getFieldWithDefault(msg, 1, 0),
    y: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.Zone}
 */
proto.Zone.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.Zone;
  return proto.Zone.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.Zone} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.Zone}
 */
proto.Zone.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setX(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setY(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.Zone.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.Zone.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.Zone} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.Zone.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getX();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getY();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 x = 1;
 * @return {number}
 */
proto.Zone.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.Zone} returns this
 */
proto.Zone.prototype.setX = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 y = 2;
 * @return {number}
 */
proto.Zone.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.Zone} returns this
 */
proto.Zone.prototype.setY = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ZoneMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.ZoneMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ZoneMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ZoneMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    roomid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    x: jspb.Message.getFieldWithDefault(msg, 2, 0),
    y: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ZoneMessage}
 */
proto.ZoneMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ZoneMessage;
  return proto.ZoneMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ZoneMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ZoneMessage}
 */
proto.ZoneMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoomid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setX(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setY(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ZoneMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ZoneMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ZoneMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ZoneMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoomid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getX();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getY();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional string roomId = 1;
 * @return {string}
 */
proto.ZoneMessage.prototype.getRoomid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ZoneMessage} returns this
 */
proto.ZoneMessage.prototype.setRoomid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 x = 2;
 * @return {number}
 */
proto.ZoneMessage.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.ZoneMessage} returns this
 */
proto.ZoneMessage.prototype.setX = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 y = 3;
 * @return {number}
 */
proto.ZoneMessage.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.ZoneMessage} returns this
 */
proto.ZoneMessage.prototype.setY = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RoomMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.RoomMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RoomMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RoomMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    roomid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RoomMessage}
 */
proto.RoomMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RoomMessage;
  return proto.RoomMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RoomMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RoomMessage}
 */
proto.RoomMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoomid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RoomMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RoomMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RoomMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RoomMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoomid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string roomId = 1;
 * @return {string}
 */
proto.RoomMessage.prototype.getRoomid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.RoomMessage} returns this
 */
proto.RoomMessage.prototype.setRoomid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.PusherToBackMessage.oneofGroups_ = [[1,2,4,5,6,7,10,12,13,14,15,16,17,18,19,21,22,23,24]];

/**
 * @enum {number}
 */
proto.PusherToBackMessage.MessageCase = {
  MESSAGE_NOT_SET: 0,
  JOINROOMMESSAGE: 1,
  USERMOVESMESSAGE: 2,
  ITEMEVENTMESSAGE: 4,
  SETPLAYERDETAILSMESSAGE: 5,
  WEBRTCSIGNALTOSERVERMESSAGE: 6,
  WEBRTCSCREENSHARINGSIGNALTOSERVERMESSAGE: 7,
  REPORTPLAYERMESSAGE: 10,
  SENDUSERMESSAGE: 12,
  BANUSERMESSAGE: 13,
  EMOTEPROMPTMESSAGE: 14,
  VARIABLEMESSAGE: 15,
  FOLLOWREQUESTMESSAGE: 16,
  FOLLOWCONFIRMATIONMESSAGE: 17,
  FOLLOWABORTMESSAGE: 18,
  LOCKGROUPPROMPTMESSAGE: 19,
  QUERYMESSAGE: 21,
  ASKPOSITIONMESSAGE: 22,
  EDITMAPCOMMANDMESSAGE: 23,
  PINGMESSAGE: 24
};

/**
 * @return {proto.PusherToBackMessage.MessageCase}
 */
proto.PusherToBackMessage.prototype.getMessageCase = function() {
  return /** @type {proto.PusherToBackMessage.MessageCase} */(jspb.Message.computeOneofCase(this, proto.PusherToBackMessage.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.PusherToBackMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.PusherToBackMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.PusherToBackMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PusherToBackMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    joinroommessage: (f = msg.getJoinroommessage()) && proto.JoinRoomMessage.toObject(includeInstance, f),
    usermovesmessage: (f = msg.getUsermovesmessage()) && proto.UserMovesMessage.toObject(includeInstance, f),
    itemeventmessage: (f = msg.getItemeventmessage()) && proto.ItemEventMessage.toObject(includeInstance, f),
    setplayerdetailsmessage: (f = msg.getSetplayerdetailsmessage()) && proto.SetPlayerDetailsMessage.toObject(includeInstance, f),
    webrtcsignaltoservermessage: (f = msg.getWebrtcsignaltoservermessage()) && proto.WebRtcSignalToServerMessage.toObject(includeInstance, f),
    webrtcscreensharingsignaltoservermessage: (f = msg.getWebrtcscreensharingsignaltoservermessage()) && proto.WebRtcSignalToServerMessage.toObject(includeInstance, f),
    reportplayermessage: (f = msg.getReportplayermessage()) && proto.ReportPlayerMessage.toObject(includeInstance, f),
    sendusermessage: (f = msg.getSendusermessage()) && proto.SendUserMessage.toObject(includeInstance, f),
    banusermessage: (f = msg.getBanusermessage()) && proto.BanUserMessage.toObject(includeInstance, f),
    emotepromptmessage: (f = msg.getEmotepromptmessage()) && proto.EmotePromptMessage.toObject(includeInstance, f),
    variablemessage: (f = msg.getVariablemessage()) && proto.VariableMessage.toObject(includeInstance, f),
    followrequestmessage: (f = msg.getFollowrequestmessage()) && proto.FollowRequestMessage.toObject(includeInstance, f),
    followconfirmationmessage: (f = msg.getFollowconfirmationmessage()) && proto.FollowConfirmationMessage.toObject(includeInstance, f),
    followabortmessage: (f = msg.getFollowabortmessage()) && proto.FollowAbortMessage.toObject(includeInstance, f),
    lockgrouppromptmessage: (f = msg.getLockgrouppromptmessage()) && proto.LockGroupPromptMessage.toObject(includeInstance, f),
    querymessage: (f = msg.getQuerymessage()) && proto.QueryMessage.toObject(includeInstance, f),
    askpositionmessage: (f = msg.getAskpositionmessage()) && proto.AskPositionMessage.toObject(includeInstance, f),
    editmapcommandmessage: (f = msg.getEditmapcommandmessage()) && proto.EditMapCommandMessage.toObject(includeInstance, f),
    pingmessage: (f = msg.getPingmessage()) && proto.PingMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.PusherToBackMessage}
 */
proto.PusherToBackMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.PusherToBackMessage;
  return proto.PusherToBackMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.PusherToBackMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.PusherToBackMessage}
 */
proto.PusherToBackMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.JoinRoomMessage;
      reader.readMessage(value,proto.JoinRoomMessage.deserializeBinaryFromReader);
      msg.setJoinroommessage(value);
      break;
    case 2:
      var value = new proto.UserMovesMessage;
      reader.readMessage(value,proto.UserMovesMessage.deserializeBinaryFromReader);
      msg.setUsermovesmessage(value);
      break;
    case 4:
      var value = new proto.ItemEventMessage;
      reader.readMessage(value,proto.ItemEventMessage.deserializeBinaryFromReader);
      msg.setItemeventmessage(value);
      break;
    case 5:
      var value = new proto.SetPlayerDetailsMessage;
      reader.readMessage(value,proto.SetPlayerDetailsMessage.deserializeBinaryFromReader);
      msg.setSetplayerdetailsmessage(value);
      break;
    case 6:
      var value = new proto.WebRtcSignalToServerMessage;
      reader.readMessage(value,proto.WebRtcSignalToServerMessage.deserializeBinaryFromReader);
      msg.setWebrtcsignaltoservermessage(value);
      break;
    case 7:
      var value = new proto.WebRtcSignalToServerMessage;
      reader.readMessage(value,proto.WebRtcSignalToServerMessage.deserializeBinaryFromReader);
      msg.setWebrtcscreensharingsignaltoservermessage(value);
      break;
    case 10:
      var value = new proto.ReportPlayerMessage;
      reader.readMessage(value,proto.ReportPlayerMessage.deserializeBinaryFromReader);
      msg.setReportplayermessage(value);
      break;
    case 12:
      var value = new proto.SendUserMessage;
      reader.readMessage(value,proto.SendUserMessage.deserializeBinaryFromReader);
      msg.setSendusermessage(value);
      break;
    case 13:
      var value = new proto.BanUserMessage;
      reader.readMessage(value,proto.BanUserMessage.deserializeBinaryFromReader);
      msg.setBanusermessage(value);
      break;
    case 14:
      var value = new proto.EmotePromptMessage;
      reader.readMessage(value,proto.EmotePromptMessage.deserializeBinaryFromReader);
      msg.setEmotepromptmessage(value);
      break;
    case 15:
      var value = new proto.VariableMessage;
      reader.readMessage(value,proto.VariableMessage.deserializeBinaryFromReader);
      msg.setVariablemessage(value);
      break;
    case 16:
      var value = new proto.FollowRequestMessage;
      reader.readMessage(value,proto.FollowRequestMessage.deserializeBinaryFromReader);
      msg.setFollowrequestmessage(value);
      break;
    case 17:
      var value = new proto.FollowConfirmationMessage;
      reader.readMessage(value,proto.FollowConfirmationMessage.deserializeBinaryFromReader);
      msg.setFollowconfirmationmessage(value);
      break;
    case 18:
      var value = new proto.FollowAbortMessage;
      reader.readMessage(value,proto.FollowAbortMessage.deserializeBinaryFromReader);
      msg.setFollowabortmessage(value);
      break;
    case 19:
      var value = new proto.LockGroupPromptMessage;
      reader.readMessage(value,proto.LockGroupPromptMessage.deserializeBinaryFromReader);
      msg.setLockgrouppromptmessage(value);
      break;
    case 21:
      var value = new proto.QueryMessage;
      reader.readMessage(value,proto.QueryMessage.deserializeBinaryFromReader);
      msg.setQuerymessage(value);
      break;
    case 22:
      var value = new proto.AskPositionMessage;
      reader.readMessage(value,proto.AskPositionMessage.deserializeBinaryFromReader);
      msg.setAskpositionmessage(value);
      break;
    case 23:
      var value = new proto.EditMapCommandMessage;
      reader.readMessage(value,proto.EditMapCommandMessage.deserializeBinaryFromReader);
      msg.setEditmapcommandmessage(value);
      break;
    case 24:
      var value = new proto.PingMessage;
      reader.readMessage(value,proto.PingMessage.deserializeBinaryFromReader);
      msg.setPingmessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.PusherToBackMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.PusherToBackMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.PusherToBackMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.PusherToBackMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJoinroommessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.JoinRoomMessage.serializeBinaryToWriter
    );
  }
  f = message.getUsermovesmessage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.UserMovesMessage.serializeBinaryToWriter
    );
  }
  f = message.getItemeventmessage();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.ItemEventMessage.serializeBinaryToWriter
    );
  }
  f = message.getSetplayerdetailsmessage();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.SetPlayerDetailsMessage.serializeBinaryToWriter
    );
  }
  f = message.getWebrtcsignaltoservermessage();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.WebRtcSignalToServerMessage.serializeBinaryToWriter
    );
  }
  f = message.getWebrtcscreensharingsignaltoservermessage();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.WebRtcSignalToServerMessage.serializeBinaryToWriter
    );
  }
  f = message.getReportplayermessage();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.ReportPlayerMessage.serializeBinaryToWriter
    );
  }
  f = message.getSendusermessage();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.SendUserMessage.serializeBinaryToWriter
    );
  }
  f = message.getBanusermessage();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.BanUserMessage.serializeBinaryToWriter
    );
  }
  f = message.getEmotepromptmessage();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.EmotePromptMessage.serializeBinaryToWriter
    );
  }
  f = message.getVariablemessage();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.VariableMessage.serializeBinaryToWriter
    );
  }
  f = message.getFollowrequestmessage();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.FollowRequestMessage.serializeBinaryToWriter
    );
  }
  f = message.getFollowconfirmationmessage();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.FollowConfirmationMessage.serializeBinaryToWriter
    );
  }
  f = message.getFollowabortmessage();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.FollowAbortMessage.serializeBinaryToWriter
    );
  }
  f = message.getLockgrouppromptmessage();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.LockGroupPromptMessage.serializeBinaryToWriter
    );
  }
  f = message.getQuerymessage();
  if (f != null) {
    writer.writeMessage(
      21,
      f,
      proto.QueryMessage.serializeBinaryToWriter
    );
  }
  f = message.getAskpositionmessage();
  if (f != null) {
    writer.writeMessage(
      22,
      f,
      proto.AskPositionMessage.serializeBinaryToWriter
    );
  }
  f = message.getEditmapcommandmessage();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      proto.EditMapCommandMessage.serializeBinaryToWriter
    );
  }
  f = message.getPingmessage();
  if (f != null) {
    writer.writeMessage(
      24,
      f,
      proto.PingMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional JoinRoomMessage joinRoomMessage = 1;
 * @return {?proto.JoinRoomMessage}
 */
proto.PusherToBackMessage.prototype.getJoinroommessage = function() {
  return /** @type{?proto.JoinRoomMessage} */ (
    jspb.Message.getWrapperField(this, proto.JoinRoomMessage, 1));
};


/**
 * @param {?proto.JoinRoomMessage|undefined} value
 * @return {!proto.PusherToBackMessage} returns this
*/
proto.PusherToBackMessage.prototype.setJoinroommessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.PusherToBackMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PusherToBackMessage} returns this
 */
proto.PusherToBackMessage.prototype.clearJoinroommessage = function() {
  return this.setJoinroommessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PusherToBackMessage.prototype.hasJoinroommessage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional UserMovesMessage userMovesMessage = 2;
 * @return {?proto.UserMovesMessage}
 */
proto.PusherToBackMessage.prototype.getUsermovesmessage = function() {
  return /** @type{?proto.UserMovesMessage} */ (
    jspb.Message.getWrapperField(this, proto.UserMovesMessage, 2));
};


/**
 * @param {?proto.UserMovesMessage|undefined} value
 * @return {!proto.PusherToBackMessage} returns this
*/
proto.PusherToBackMessage.prototype.setUsermovesmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.PusherToBackMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PusherToBackMessage} returns this
 */
proto.PusherToBackMessage.prototype.clearUsermovesmessage = function() {
  return this.setUsermovesmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PusherToBackMessage.prototype.hasUsermovesmessage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ItemEventMessage itemEventMessage = 4;
 * @return {?proto.ItemEventMessage}
 */
proto.PusherToBackMessage.prototype.getItemeventmessage = function() {
  return /** @type{?proto.ItemEventMessage} */ (
    jspb.Message.getWrapperField(this, proto.ItemEventMessage, 4));
};


/**
 * @param {?proto.ItemEventMessage|undefined} value
 * @return {!proto.PusherToBackMessage} returns this
*/
proto.PusherToBackMessage.prototype.setItemeventmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.PusherToBackMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PusherToBackMessage} returns this
 */
proto.PusherToBackMessage.prototype.clearItemeventmessage = function() {
  return this.setItemeventmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PusherToBackMessage.prototype.hasItemeventmessage = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional SetPlayerDetailsMessage setPlayerDetailsMessage = 5;
 * @return {?proto.SetPlayerDetailsMessage}
 */
proto.PusherToBackMessage.prototype.getSetplayerdetailsmessage = function() {
  return /** @type{?proto.SetPlayerDetailsMessage} */ (
    jspb.Message.getWrapperField(this, proto.SetPlayerDetailsMessage, 5));
};


/**
 * @param {?proto.SetPlayerDetailsMessage|undefined} value
 * @return {!proto.PusherToBackMessage} returns this
*/
proto.PusherToBackMessage.prototype.setSetplayerdetailsmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.PusherToBackMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PusherToBackMessage} returns this
 */
proto.PusherToBackMessage.prototype.clearSetplayerdetailsmessage = function() {
  return this.setSetplayerdetailsmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PusherToBackMessage.prototype.hasSetplayerdetailsmessage = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional WebRtcSignalToServerMessage webRtcSignalToServerMessage = 6;
 * @return {?proto.WebRtcSignalToServerMessage}
 */
proto.PusherToBackMessage.prototype.getWebrtcsignaltoservermessage = function() {
  return /** @type{?proto.WebRtcSignalToServerMessage} */ (
    jspb.Message.getWrapperField(this, proto.WebRtcSignalToServerMessage, 6));
};


/**
 * @param {?proto.WebRtcSignalToServerMessage|undefined} value
 * @return {!proto.PusherToBackMessage} returns this
*/
proto.PusherToBackMessage.prototype.setWebrtcsignaltoservermessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.PusherToBackMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PusherToBackMessage} returns this
 */
proto.PusherToBackMessage.prototype.clearWebrtcsignaltoservermessage = function() {
  return this.setWebrtcsignaltoservermessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PusherToBackMessage.prototype.hasWebrtcsignaltoservermessage = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional WebRtcSignalToServerMessage webRtcScreenSharingSignalToServerMessage = 7;
 * @return {?proto.WebRtcSignalToServerMessage}
 */
proto.PusherToBackMessage.prototype.getWebrtcscreensharingsignaltoservermessage = function() {
  return /** @type{?proto.WebRtcSignalToServerMessage} */ (
    jspb.Message.getWrapperField(this, proto.WebRtcSignalToServerMessage, 7));
};


/**
 * @param {?proto.WebRtcSignalToServerMessage|undefined} value
 * @return {!proto.PusherToBackMessage} returns this
*/
proto.PusherToBackMessage.prototype.setWebrtcscreensharingsignaltoservermessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.PusherToBackMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PusherToBackMessage} returns this
 */
proto.PusherToBackMessage.prototype.clearWebrtcscreensharingsignaltoservermessage = function() {
  return this.setWebrtcscreensharingsignaltoservermessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PusherToBackMessage.prototype.hasWebrtcscreensharingsignaltoservermessage = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional ReportPlayerMessage reportPlayerMessage = 10;
 * @return {?proto.ReportPlayerMessage}
 */
proto.PusherToBackMessage.prototype.getReportplayermessage = function() {
  return /** @type{?proto.ReportPlayerMessage} */ (
    jspb.Message.getWrapperField(this, proto.ReportPlayerMessage, 10));
};


/**
 * @param {?proto.ReportPlayerMessage|undefined} value
 * @return {!proto.PusherToBackMessage} returns this
*/
proto.PusherToBackMessage.prototype.setReportplayermessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.PusherToBackMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PusherToBackMessage} returns this
 */
proto.PusherToBackMessage.prototype.clearReportplayermessage = function() {
  return this.setReportplayermessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PusherToBackMessage.prototype.hasReportplayermessage = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional SendUserMessage sendUserMessage = 12;
 * @return {?proto.SendUserMessage}
 */
proto.PusherToBackMessage.prototype.getSendusermessage = function() {
  return /** @type{?proto.SendUserMessage} */ (
    jspb.Message.getWrapperField(this, proto.SendUserMessage, 12));
};


/**
 * @param {?proto.SendUserMessage|undefined} value
 * @return {!proto.PusherToBackMessage} returns this
*/
proto.PusherToBackMessage.prototype.setSendusermessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.PusherToBackMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PusherToBackMessage} returns this
 */
proto.PusherToBackMessage.prototype.clearSendusermessage = function() {
  return this.setSendusermessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PusherToBackMessage.prototype.hasSendusermessage = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional BanUserMessage banUserMessage = 13;
 * @return {?proto.BanUserMessage}
 */
proto.PusherToBackMessage.prototype.getBanusermessage = function() {
  return /** @type{?proto.BanUserMessage} */ (
    jspb.Message.getWrapperField(this, proto.BanUserMessage, 13));
};


/**
 * @param {?proto.BanUserMessage|undefined} value
 * @return {!proto.PusherToBackMessage} returns this
*/
proto.PusherToBackMessage.prototype.setBanusermessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.PusherToBackMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PusherToBackMessage} returns this
 */
proto.PusherToBackMessage.prototype.clearBanusermessage = function() {
  return this.setBanusermessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PusherToBackMessage.prototype.hasBanusermessage = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional EmotePromptMessage emotePromptMessage = 14;
 * @return {?proto.EmotePromptMessage}
 */
proto.PusherToBackMessage.prototype.getEmotepromptmessage = function() {
  return /** @type{?proto.EmotePromptMessage} */ (
    jspb.Message.getWrapperField(this, proto.EmotePromptMessage, 14));
};


/**
 * @param {?proto.EmotePromptMessage|undefined} value
 * @return {!proto.PusherToBackMessage} returns this
*/
proto.PusherToBackMessage.prototype.setEmotepromptmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 14, proto.PusherToBackMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PusherToBackMessage} returns this
 */
proto.PusherToBackMessage.prototype.clearEmotepromptmessage = function() {
  return this.setEmotepromptmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PusherToBackMessage.prototype.hasEmotepromptmessage = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional VariableMessage variableMessage = 15;
 * @return {?proto.VariableMessage}
 */
proto.PusherToBackMessage.prototype.getVariablemessage = function() {
  return /** @type{?proto.VariableMessage} */ (
    jspb.Message.getWrapperField(this, proto.VariableMessage, 15));
};


/**
 * @param {?proto.VariableMessage|undefined} value
 * @return {!proto.PusherToBackMessage} returns this
*/
proto.PusherToBackMessage.prototype.setVariablemessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 15, proto.PusherToBackMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PusherToBackMessage} returns this
 */
proto.PusherToBackMessage.prototype.clearVariablemessage = function() {
  return this.setVariablemessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PusherToBackMessage.prototype.hasVariablemessage = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional FollowRequestMessage followRequestMessage = 16;
 * @return {?proto.FollowRequestMessage}
 */
proto.PusherToBackMessage.prototype.getFollowrequestmessage = function() {
  return /** @type{?proto.FollowRequestMessage} */ (
    jspb.Message.getWrapperField(this, proto.FollowRequestMessage, 16));
};


/**
 * @param {?proto.FollowRequestMessage|undefined} value
 * @return {!proto.PusherToBackMessage} returns this
*/
proto.PusherToBackMessage.prototype.setFollowrequestmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 16, proto.PusherToBackMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PusherToBackMessage} returns this
 */
proto.PusherToBackMessage.prototype.clearFollowrequestmessage = function() {
  return this.setFollowrequestmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PusherToBackMessage.prototype.hasFollowrequestmessage = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional FollowConfirmationMessage followConfirmationMessage = 17;
 * @return {?proto.FollowConfirmationMessage}
 */
proto.PusherToBackMessage.prototype.getFollowconfirmationmessage = function() {
  return /** @type{?proto.FollowConfirmationMessage} */ (
    jspb.Message.getWrapperField(this, proto.FollowConfirmationMessage, 17));
};


/**
 * @param {?proto.FollowConfirmationMessage|undefined} value
 * @return {!proto.PusherToBackMessage} returns this
*/
proto.PusherToBackMessage.prototype.setFollowconfirmationmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 17, proto.PusherToBackMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PusherToBackMessage} returns this
 */
proto.PusherToBackMessage.prototype.clearFollowconfirmationmessage = function() {
  return this.setFollowconfirmationmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PusherToBackMessage.prototype.hasFollowconfirmationmessage = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional FollowAbortMessage followAbortMessage = 18;
 * @return {?proto.FollowAbortMessage}
 */
proto.PusherToBackMessage.prototype.getFollowabortmessage = function() {
  return /** @type{?proto.FollowAbortMessage} */ (
    jspb.Message.getWrapperField(this, proto.FollowAbortMessage, 18));
};


/**
 * @param {?proto.FollowAbortMessage|undefined} value
 * @return {!proto.PusherToBackMessage} returns this
*/
proto.PusherToBackMessage.prototype.setFollowabortmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 18, proto.PusherToBackMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PusherToBackMessage} returns this
 */
proto.PusherToBackMessage.prototype.clearFollowabortmessage = function() {
  return this.setFollowabortmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PusherToBackMessage.prototype.hasFollowabortmessage = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional LockGroupPromptMessage lockGroupPromptMessage = 19;
 * @return {?proto.LockGroupPromptMessage}
 */
proto.PusherToBackMessage.prototype.getLockgrouppromptmessage = function() {
  return /** @type{?proto.LockGroupPromptMessage} */ (
    jspb.Message.getWrapperField(this, proto.LockGroupPromptMessage, 19));
};


/**
 * @param {?proto.LockGroupPromptMessage|undefined} value
 * @return {!proto.PusherToBackMessage} returns this
*/
proto.PusherToBackMessage.prototype.setLockgrouppromptmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 19, proto.PusherToBackMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PusherToBackMessage} returns this
 */
proto.PusherToBackMessage.prototype.clearLockgrouppromptmessage = function() {
  return this.setLockgrouppromptmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PusherToBackMessage.prototype.hasLockgrouppromptmessage = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional QueryMessage queryMessage = 21;
 * @return {?proto.QueryMessage}
 */
proto.PusherToBackMessage.prototype.getQuerymessage = function() {
  return /** @type{?proto.QueryMessage} */ (
    jspb.Message.getWrapperField(this, proto.QueryMessage, 21));
};


/**
 * @param {?proto.QueryMessage|undefined} value
 * @return {!proto.PusherToBackMessage} returns this
*/
proto.PusherToBackMessage.prototype.setQuerymessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 21, proto.PusherToBackMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PusherToBackMessage} returns this
 */
proto.PusherToBackMessage.prototype.clearQuerymessage = function() {
  return this.setQuerymessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PusherToBackMessage.prototype.hasQuerymessage = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional AskPositionMessage askPositionMessage = 22;
 * @return {?proto.AskPositionMessage}
 */
proto.PusherToBackMessage.prototype.getAskpositionmessage = function() {
  return /** @type{?proto.AskPositionMessage} */ (
    jspb.Message.getWrapperField(this, proto.AskPositionMessage, 22));
};


/**
 * @param {?proto.AskPositionMessage|undefined} value
 * @return {!proto.PusherToBackMessage} returns this
*/
proto.PusherToBackMessage.prototype.setAskpositionmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 22, proto.PusherToBackMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PusherToBackMessage} returns this
 */
proto.PusherToBackMessage.prototype.clearAskpositionmessage = function() {
  return this.setAskpositionmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PusherToBackMessage.prototype.hasAskpositionmessage = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional EditMapCommandMessage editMapCommandMessage = 23;
 * @return {?proto.EditMapCommandMessage}
 */
proto.PusherToBackMessage.prototype.getEditmapcommandmessage = function() {
  return /** @type{?proto.EditMapCommandMessage} */ (
    jspb.Message.getWrapperField(this, proto.EditMapCommandMessage, 23));
};


/**
 * @param {?proto.EditMapCommandMessage|undefined} value
 * @return {!proto.PusherToBackMessage} returns this
*/
proto.PusherToBackMessage.prototype.setEditmapcommandmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 23, proto.PusherToBackMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PusherToBackMessage} returns this
 */
proto.PusherToBackMessage.prototype.clearEditmapcommandmessage = function() {
  return this.setEditmapcommandmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PusherToBackMessage.prototype.hasEditmapcommandmessage = function() {
  return jspb.Message.getField(this, 23) != null;
};


/**
 * optional PingMessage pingMessage = 24;
 * @return {?proto.PingMessage}
 */
proto.PusherToBackMessage.prototype.getPingmessage = function() {
  return /** @type{?proto.PingMessage} */ (
    jspb.Message.getWrapperField(this, proto.PingMessage, 24));
};


/**
 * @param {?proto.PingMessage|undefined} value
 * @return {!proto.PusherToBackMessage} returns this
*/
proto.PusherToBackMessage.prototype.setPingmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 24, proto.PusherToBackMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.PusherToBackMessage} returns this
 */
proto.PusherToBackMessage.prototype.clearPingmessage = function() {
  return this.setPingmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.PusherToBackMessage.prototype.hasPingmessage = function() {
  return jspb.Message.getField(this, 24) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.BatchToPusherMessage.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.BatchToPusherMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.BatchToPusherMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.BatchToPusherMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.BatchToPusherMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadList: jspb.Message.toObjectList(msg.getPayloadList(),
    proto.SubToPusherMessage.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.BatchToPusherMessage}
 */
proto.BatchToPusherMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.BatchToPusherMessage;
  return proto.BatchToPusherMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.BatchToPusherMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.BatchToPusherMessage}
 */
proto.BatchToPusherMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.SubToPusherMessage;
      reader.readMessage(value,proto.SubToPusherMessage.deserializeBinaryFromReader);
      msg.addPayload(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.BatchToPusherMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.BatchToPusherMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.BatchToPusherMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.BatchToPusherMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPayloadList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.SubToPusherMessage.serializeBinaryToWriter
    );
  }
};


/**
 * repeated SubToPusherMessage payload = 2;
 * @return {!Array<!proto.SubToPusherMessage>}
 */
proto.BatchToPusherMessage.prototype.getPayloadList = function() {
  return /** @type{!Array<!proto.SubToPusherMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.SubToPusherMessage, 2));
};


/**
 * @param {!Array<!proto.SubToPusherMessage>} value
 * @return {!proto.BatchToPusherMessage} returns this
*/
proto.BatchToPusherMessage.prototype.setPayloadList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.SubToPusherMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.SubToPusherMessage}
 */
proto.BatchToPusherMessage.prototype.addPayload = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.SubToPusherMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.BatchToPusherMessage} returns this
 */
proto.BatchToPusherMessage.prototype.clearPayloadList = function() {
  return this.setPayloadList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.SubToPusherMessage.oneofGroups_ = [[1,2,3,4,5,6,7,8,9,10,11,12]];

/**
 * @enum {number}
 */
proto.SubToPusherMessage.MessageCase = {
  MESSAGE_NOT_SET: 0,
  USERJOINEDZONEMESSAGE: 1,
  GROUPUPDATEZONEMESSAGE: 2,
  USERMOVEDMESSAGE: 3,
  GROUPLEFTZONEMESSAGE: 4,
  USERLEFTZONEMESSAGE: 5,
  ITEMEVENTMESSAGE: 6,
  SENDUSERMESSAGE: 7,
  BANUSERMESSAGE: 8,
  EMOTEEVENTMESSAGE: 9,
  ERRORMESSAGE: 10,
  PLAYERDETAILSUPDATEDMESSAGE: 11,
  EDITMAPCOMMANDMESSAGE: 12
};

/**
 * @return {proto.SubToPusherMessage.MessageCase}
 */
proto.SubToPusherMessage.prototype.getMessageCase = function() {
  return /** @type {proto.SubToPusherMessage.MessageCase} */(jspb.Message.computeOneofCase(this, proto.SubToPusherMessage.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SubToPusherMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.SubToPusherMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SubToPusherMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SubToPusherMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    userjoinedzonemessage: (f = msg.getUserjoinedzonemessage()) && proto.UserJoinedZoneMessage.toObject(includeInstance, f),
    groupupdatezonemessage: (f = msg.getGroupupdatezonemessage()) && proto.GroupUpdateZoneMessage.toObject(includeInstance, f),
    usermovedmessage: (f = msg.getUsermovedmessage()) && proto.UserMovedMessage.toObject(includeInstance, f),
    groupleftzonemessage: (f = msg.getGroupleftzonemessage()) && proto.GroupLeftZoneMessage.toObject(includeInstance, f),
    userleftzonemessage: (f = msg.getUserleftzonemessage()) && proto.UserLeftZoneMessage.toObject(includeInstance, f),
    itemeventmessage: (f = msg.getItemeventmessage()) && proto.ItemEventMessage.toObject(includeInstance, f),
    sendusermessage: (f = msg.getSendusermessage()) && proto.SendUserMessage.toObject(includeInstance, f),
    banusermessage: (f = msg.getBanusermessage()) && proto.BanUserMessage.toObject(includeInstance, f),
    emoteeventmessage: (f = msg.getEmoteeventmessage()) && proto.EmoteEventMessage.toObject(includeInstance, f),
    errormessage: (f = msg.getErrormessage()) && proto.ErrorMessage.toObject(includeInstance, f),
    playerdetailsupdatedmessage: (f = msg.getPlayerdetailsupdatedmessage()) && proto.PlayerDetailsUpdatedMessage.toObject(includeInstance, f),
    editmapcommandmessage: (f = msg.getEditmapcommandmessage()) && proto.EditMapCommandMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SubToPusherMessage}
 */
proto.SubToPusherMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SubToPusherMessage;
  return proto.SubToPusherMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SubToPusherMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SubToPusherMessage}
 */
proto.SubToPusherMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.UserJoinedZoneMessage;
      reader.readMessage(value,proto.UserJoinedZoneMessage.deserializeBinaryFromReader);
      msg.setUserjoinedzonemessage(value);
      break;
    case 2:
      var value = new proto.GroupUpdateZoneMessage;
      reader.readMessage(value,proto.GroupUpdateZoneMessage.deserializeBinaryFromReader);
      msg.setGroupupdatezonemessage(value);
      break;
    case 3:
      var value = new proto.UserMovedMessage;
      reader.readMessage(value,proto.UserMovedMessage.deserializeBinaryFromReader);
      msg.setUsermovedmessage(value);
      break;
    case 4:
      var value = new proto.GroupLeftZoneMessage;
      reader.readMessage(value,proto.GroupLeftZoneMessage.deserializeBinaryFromReader);
      msg.setGroupleftzonemessage(value);
      break;
    case 5:
      var value = new proto.UserLeftZoneMessage;
      reader.readMessage(value,proto.UserLeftZoneMessage.deserializeBinaryFromReader);
      msg.setUserleftzonemessage(value);
      break;
    case 6:
      var value = new proto.ItemEventMessage;
      reader.readMessage(value,proto.ItemEventMessage.deserializeBinaryFromReader);
      msg.setItemeventmessage(value);
      break;
    case 7:
      var value = new proto.SendUserMessage;
      reader.readMessage(value,proto.SendUserMessage.deserializeBinaryFromReader);
      msg.setSendusermessage(value);
      break;
    case 8:
      var value = new proto.BanUserMessage;
      reader.readMessage(value,proto.BanUserMessage.deserializeBinaryFromReader);
      msg.setBanusermessage(value);
      break;
    case 9:
      var value = new proto.EmoteEventMessage;
      reader.readMessage(value,proto.EmoteEventMessage.deserializeBinaryFromReader);
      msg.setEmoteeventmessage(value);
      break;
    case 10:
      var value = new proto.ErrorMessage;
      reader.readMessage(value,proto.ErrorMessage.deserializeBinaryFromReader);
      msg.setErrormessage(value);
      break;
    case 11:
      var value = new proto.PlayerDetailsUpdatedMessage;
      reader.readMessage(value,proto.PlayerDetailsUpdatedMessage.deserializeBinaryFromReader);
      msg.setPlayerdetailsupdatedmessage(value);
      break;
    case 12:
      var value = new proto.EditMapCommandMessage;
      reader.readMessage(value,proto.EditMapCommandMessage.deserializeBinaryFromReader);
      msg.setEditmapcommandmessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SubToPusherMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SubToPusherMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SubToPusherMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SubToPusherMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserjoinedzonemessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.UserJoinedZoneMessage.serializeBinaryToWriter
    );
  }
  f = message.getGroupupdatezonemessage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.GroupUpdateZoneMessage.serializeBinaryToWriter
    );
  }
  f = message.getUsermovedmessage();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.UserMovedMessage.serializeBinaryToWriter
    );
  }
  f = message.getGroupleftzonemessage();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.GroupLeftZoneMessage.serializeBinaryToWriter
    );
  }
  f = message.getUserleftzonemessage();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.UserLeftZoneMessage.serializeBinaryToWriter
    );
  }
  f = message.getItemeventmessage();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.ItemEventMessage.serializeBinaryToWriter
    );
  }
  f = message.getSendusermessage();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.SendUserMessage.serializeBinaryToWriter
    );
  }
  f = message.getBanusermessage();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.BanUserMessage.serializeBinaryToWriter
    );
  }
  f = message.getEmoteeventmessage();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.EmoteEventMessage.serializeBinaryToWriter
    );
  }
  f = message.getErrormessage();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.ErrorMessage.serializeBinaryToWriter
    );
  }
  f = message.getPlayerdetailsupdatedmessage();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.PlayerDetailsUpdatedMessage.serializeBinaryToWriter
    );
  }
  f = message.getEditmapcommandmessage();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.EditMapCommandMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional UserJoinedZoneMessage userJoinedZoneMessage = 1;
 * @return {?proto.UserJoinedZoneMessage}
 */
proto.SubToPusherMessage.prototype.getUserjoinedzonemessage = function() {
  return /** @type{?proto.UserJoinedZoneMessage} */ (
    jspb.Message.getWrapperField(this, proto.UserJoinedZoneMessage, 1));
};


/**
 * @param {?proto.UserJoinedZoneMessage|undefined} value
 * @return {!proto.SubToPusherMessage} returns this
*/
proto.SubToPusherMessage.prototype.setUserjoinedzonemessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.SubToPusherMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.SubToPusherMessage} returns this
 */
proto.SubToPusherMessage.prototype.clearUserjoinedzonemessage = function() {
  return this.setUserjoinedzonemessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SubToPusherMessage.prototype.hasUserjoinedzonemessage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional GroupUpdateZoneMessage groupUpdateZoneMessage = 2;
 * @return {?proto.GroupUpdateZoneMessage}
 */
proto.SubToPusherMessage.prototype.getGroupupdatezonemessage = function() {
  return /** @type{?proto.GroupUpdateZoneMessage} */ (
    jspb.Message.getWrapperField(this, proto.GroupUpdateZoneMessage, 2));
};


/**
 * @param {?proto.GroupUpdateZoneMessage|undefined} value
 * @return {!proto.SubToPusherMessage} returns this
*/
proto.SubToPusherMessage.prototype.setGroupupdatezonemessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.SubToPusherMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.SubToPusherMessage} returns this
 */
proto.SubToPusherMessage.prototype.clearGroupupdatezonemessage = function() {
  return this.setGroupupdatezonemessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SubToPusherMessage.prototype.hasGroupupdatezonemessage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional UserMovedMessage userMovedMessage = 3;
 * @return {?proto.UserMovedMessage}
 */
proto.SubToPusherMessage.prototype.getUsermovedmessage = function() {
  return /** @type{?proto.UserMovedMessage} */ (
    jspb.Message.getWrapperField(this, proto.UserMovedMessage, 3));
};


/**
 * @param {?proto.UserMovedMessage|undefined} value
 * @return {!proto.SubToPusherMessage} returns this
*/
proto.SubToPusherMessage.prototype.setUsermovedmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.SubToPusherMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.SubToPusherMessage} returns this
 */
proto.SubToPusherMessage.prototype.clearUsermovedmessage = function() {
  return this.setUsermovedmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SubToPusherMessage.prototype.hasUsermovedmessage = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional GroupLeftZoneMessage groupLeftZoneMessage = 4;
 * @return {?proto.GroupLeftZoneMessage}
 */
proto.SubToPusherMessage.prototype.getGroupleftzonemessage = function() {
  return /** @type{?proto.GroupLeftZoneMessage} */ (
    jspb.Message.getWrapperField(this, proto.GroupLeftZoneMessage, 4));
};


/**
 * @param {?proto.GroupLeftZoneMessage|undefined} value
 * @return {!proto.SubToPusherMessage} returns this
*/
proto.SubToPusherMessage.prototype.setGroupleftzonemessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.SubToPusherMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.SubToPusherMessage} returns this
 */
proto.SubToPusherMessage.prototype.clearGroupleftzonemessage = function() {
  return this.setGroupleftzonemessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SubToPusherMessage.prototype.hasGroupleftzonemessage = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional UserLeftZoneMessage userLeftZoneMessage = 5;
 * @return {?proto.UserLeftZoneMessage}
 */
proto.SubToPusherMessage.prototype.getUserleftzonemessage = function() {
  return /** @type{?proto.UserLeftZoneMessage} */ (
    jspb.Message.getWrapperField(this, proto.UserLeftZoneMessage, 5));
};


/**
 * @param {?proto.UserLeftZoneMessage|undefined} value
 * @return {!proto.SubToPusherMessage} returns this
*/
proto.SubToPusherMessage.prototype.setUserleftzonemessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.SubToPusherMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.SubToPusherMessage} returns this
 */
proto.SubToPusherMessage.prototype.clearUserleftzonemessage = function() {
  return this.setUserleftzonemessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SubToPusherMessage.prototype.hasUserleftzonemessage = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional ItemEventMessage itemEventMessage = 6;
 * @return {?proto.ItemEventMessage}
 */
proto.SubToPusherMessage.prototype.getItemeventmessage = function() {
  return /** @type{?proto.ItemEventMessage} */ (
    jspb.Message.getWrapperField(this, proto.ItemEventMessage, 6));
};


/**
 * @param {?proto.ItemEventMessage|undefined} value
 * @return {!proto.SubToPusherMessage} returns this
*/
proto.SubToPusherMessage.prototype.setItemeventmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.SubToPusherMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.SubToPusherMessage} returns this
 */
proto.SubToPusherMessage.prototype.clearItemeventmessage = function() {
  return this.setItemeventmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SubToPusherMessage.prototype.hasItemeventmessage = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional SendUserMessage sendUserMessage = 7;
 * @return {?proto.SendUserMessage}
 */
proto.SubToPusherMessage.prototype.getSendusermessage = function() {
  return /** @type{?proto.SendUserMessage} */ (
    jspb.Message.getWrapperField(this, proto.SendUserMessage, 7));
};


/**
 * @param {?proto.SendUserMessage|undefined} value
 * @return {!proto.SubToPusherMessage} returns this
*/
proto.SubToPusherMessage.prototype.setSendusermessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.SubToPusherMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.SubToPusherMessage} returns this
 */
proto.SubToPusherMessage.prototype.clearSendusermessage = function() {
  return this.setSendusermessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SubToPusherMessage.prototype.hasSendusermessage = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional BanUserMessage banUserMessage = 8;
 * @return {?proto.BanUserMessage}
 */
proto.SubToPusherMessage.prototype.getBanusermessage = function() {
  return /** @type{?proto.BanUserMessage} */ (
    jspb.Message.getWrapperField(this, proto.BanUserMessage, 8));
};


/**
 * @param {?proto.BanUserMessage|undefined} value
 * @return {!proto.SubToPusherMessage} returns this
*/
proto.SubToPusherMessage.prototype.setBanusermessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.SubToPusherMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.SubToPusherMessage} returns this
 */
proto.SubToPusherMessage.prototype.clearBanusermessage = function() {
  return this.setBanusermessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SubToPusherMessage.prototype.hasBanusermessage = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional EmoteEventMessage emoteEventMessage = 9;
 * @return {?proto.EmoteEventMessage}
 */
proto.SubToPusherMessage.prototype.getEmoteeventmessage = function() {
  return /** @type{?proto.EmoteEventMessage} */ (
    jspb.Message.getWrapperField(this, proto.EmoteEventMessage, 9));
};


/**
 * @param {?proto.EmoteEventMessage|undefined} value
 * @return {!proto.SubToPusherMessage} returns this
*/
proto.SubToPusherMessage.prototype.setEmoteeventmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.SubToPusherMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.SubToPusherMessage} returns this
 */
proto.SubToPusherMessage.prototype.clearEmoteeventmessage = function() {
  return this.setEmoteeventmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SubToPusherMessage.prototype.hasEmoteeventmessage = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional ErrorMessage errorMessage = 10;
 * @return {?proto.ErrorMessage}
 */
proto.SubToPusherMessage.prototype.getErrormessage = function() {
  return /** @type{?proto.ErrorMessage} */ (
    jspb.Message.getWrapperField(this, proto.ErrorMessage, 10));
};


/**
 * @param {?proto.ErrorMessage|undefined} value
 * @return {!proto.SubToPusherMessage} returns this
*/
proto.SubToPusherMessage.prototype.setErrormessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.SubToPusherMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.SubToPusherMessage} returns this
 */
proto.SubToPusherMessage.prototype.clearErrormessage = function() {
  return this.setErrormessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SubToPusherMessage.prototype.hasErrormessage = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional PlayerDetailsUpdatedMessage playerDetailsUpdatedMessage = 11;
 * @return {?proto.PlayerDetailsUpdatedMessage}
 */
proto.SubToPusherMessage.prototype.getPlayerdetailsupdatedmessage = function() {
  return /** @type{?proto.PlayerDetailsUpdatedMessage} */ (
    jspb.Message.getWrapperField(this, proto.PlayerDetailsUpdatedMessage, 11));
};


/**
 * @param {?proto.PlayerDetailsUpdatedMessage|undefined} value
 * @return {!proto.SubToPusherMessage} returns this
*/
proto.SubToPusherMessage.prototype.setPlayerdetailsupdatedmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.SubToPusherMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.SubToPusherMessage} returns this
 */
proto.SubToPusherMessage.prototype.clearPlayerdetailsupdatedmessage = function() {
  return this.setPlayerdetailsupdatedmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SubToPusherMessage.prototype.hasPlayerdetailsupdatedmessage = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional EditMapCommandMessage editMapCommandMessage = 12;
 * @return {?proto.EditMapCommandMessage}
 */
proto.SubToPusherMessage.prototype.getEditmapcommandmessage = function() {
  return /** @type{?proto.EditMapCommandMessage} */ (
    jspb.Message.getWrapperField(this, proto.EditMapCommandMessage, 12));
};


/**
 * @param {?proto.EditMapCommandMessage|undefined} value
 * @return {!proto.SubToPusherMessage} returns this
*/
proto.SubToPusherMessage.prototype.setEditmapcommandmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.SubToPusherMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.SubToPusherMessage} returns this
 */
proto.SubToPusherMessage.prototype.clearEditmapcommandmessage = function() {
  return this.setEditmapcommandmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SubToPusherMessage.prototype.hasEditmapcommandmessage = function() {
  return jspb.Message.getField(this, 12) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.BatchToPusherRoomMessage.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.BatchToPusherRoomMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.BatchToPusherRoomMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.BatchToPusherRoomMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.BatchToPusherRoomMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    payloadList: jspb.Message.toObjectList(msg.getPayloadList(),
    proto.SubToPusherRoomMessage.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.BatchToPusherRoomMessage}
 */
proto.BatchToPusherRoomMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.BatchToPusherRoomMessage;
  return proto.BatchToPusherRoomMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.BatchToPusherRoomMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.BatchToPusherRoomMessage}
 */
proto.BatchToPusherRoomMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.SubToPusherRoomMessage;
      reader.readMessage(value,proto.SubToPusherRoomMessage.deserializeBinaryFromReader);
      msg.addPayload(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.BatchToPusherRoomMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.BatchToPusherRoomMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.BatchToPusherRoomMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.BatchToPusherRoomMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPayloadList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.SubToPusherRoomMessage.serializeBinaryToWriter
    );
  }
};


/**
 * repeated SubToPusherRoomMessage payload = 2;
 * @return {!Array<!proto.SubToPusherRoomMessage>}
 */
proto.BatchToPusherRoomMessage.prototype.getPayloadList = function() {
  return /** @type{!Array<!proto.SubToPusherRoomMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.SubToPusherRoomMessage, 2));
};


/**
 * @param {!Array<!proto.SubToPusherRoomMessage>} value
 * @return {!proto.BatchToPusherRoomMessage} returns this
*/
proto.BatchToPusherRoomMessage.prototype.setPayloadList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.SubToPusherRoomMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.SubToPusherRoomMessage}
 */
proto.BatchToPusherRoomMessage.prototype.addPayload = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.SubToPusherRoomMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.BatchToPusherRoomMessage} returns this
 */
proto.BatchToPusherRoomMessage.prototype.clearPayloadList = function() {
  return this.setPayloadList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.SubToPusherRoomMessage.oneofGroups_ = [[1,2,3,4,5]];

/**
 * @enum {number}
 */
proto.SubToPusherRoomMessage.MessageCase = {
  MESSAGE_NOT_SET: 0,
  VARIABLEMESSAGE: 1,
  ERRORMESSAGE: 2,
  EDITMAPCOMMANDMESSAGE: 3,
  JOINMUCROOMMESSAGE: 4,
  LEAVEMUCROOMMESSAGE: 5
};

/**
 * @return {proto.SubToPusherRoomMessage.MessageCase}
 */
proto.SubToPusherRoomMessage.prototype.getMessageCase = function() {
  return /** @type {proto.SubToPusherRoomMessage.MessageCase} */(jspb.Message.computeOneofCase(this, proto.SubToPusherRoomMessage.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.SubToPusherRoomMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.SubToPusherRoomMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.SubToPusherRoomMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SubToPusherRoomMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    variablemessage: (f = msg.getVariablemessage()) && proto.VariableWithTagMessage.toObject(includeInstance, f),
    errormessage: (f = msg.getErrormessage()) && proto.ErrorMessage.toObject(includeInstance, f),
    editmapcommandmessage: (f = msg.getEditmapcommandmessage()) && proto.EditMapCommandMessage.toObject(includeInstance, f),
    joinmucroommessage: (f = msg.getJoinmucroommessage()) && proto.JoinMucRoomMessage.toObject(includeInstance, f),
    leavemucroommessage: (f = msg.getLeavemucroommessage()) && proto.LeaveMucRoomMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.SubToPusherRoomMessage}
 */
proto.SubToPusherRoomMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.SubToPusherRoomMessage;
  return proto.SubToPusherRoomMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.SubToPusherRoomMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.SubToPusherRoomMessage}
 */
proto.SubToPusherRoomMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.VariableWithTagMessage;
      reader.readMessage(value,proto.VariableWithTagMessage.deserializeBinaryFromReader);
      msg.setVariablemessage(value);
      break;
    case 2:
      var value = new proto.ErrorMessage;
      reader.readMessage(value,proto.ErrorMessage.deserializeBinaryFromReader);
      msg.setErrormessage(value);
      break;
    case 3:
      var value = new proto.EditMapCommandMessage;
      reader.readMessage(value,proto.EditMapCommandMessage.deserializeBinaryFromReader);
      msg.setEditmapcommandmessage(value);
      break;
    case 4:
      var value = new proto.JoinMucRoomMessage;
      reader.readMessage(value,proto.JoinMucRoomMessage.deserializeBinaryFromReader);
      msg.setJoinmucroommessage(value);
      break;
    case 5:
      var value = new proto.LeaveMucRoomMessage;
      reader.readMessage(value,proto.LeaveMucRoomMessage.deserializeBinaryFromReader);
      msg.setLeavemucroommessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.SubToPusherRoomMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.SubToPusherRoomMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.SubToPusherRoomMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.SubToPusherRoomMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVariablemessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.VariableWithTagMessage.serializeBinaryToWriter
    );
  }
  f = message.getErrormessage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.ErrorMessage.serializeBinaryToWriter
    );
  }
  f = message.getEditmapcommandmessage();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.EditMapCommandMessage.serializeBinaryToWriter
    );
  }
  f = message.getJoinmucroommessage();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.JoinMucRoomMessage.serializeBinaryToWriter
    );
  }
  f = message.getLeavemucroommessage();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.LeaveMucRoomMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional VariableWithTagMessage variableMessage = 1;
 * @return {?proto.VariableWithTagMessage}
 */
proto.SubToPusherRoomMessage.prototype.getVariablemessage = function() {
  return /** @type{?proto.VariableWithTagMessage} */ (
    jspb.Message.getWrapperField(this, proto.VariableWithTagMessage, 1));
};


/**
 * @param {?proto.VariableWithTagMessage|undefined} value
 * @return {!proto.SubToPusherRoomMessage} returns this
*/
proto.SubToPusherRoomMessage.prototype.setVariablemessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.SubToPusherRoomMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.SubToPusherRoomMessage} returns this
 */
proto.SubToPusherRoomMessage.prototype.clearVariablemessage = function() {
  return this.setVariablemessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SubToPusherRoomMessage.prototype.hasVariablemessage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional ErrorMessage errorMessage = 2;
 * @return {?proto.ErrorMessage}
 */
proto.SubToPusherRoomMessage.prototype.getErrormessage = function() {
  return /** @type{?proto.ErrorMessage} */ (
    jspb.Message.getWrapperField(this, proto.ErrorMessage, 2));
};


/**
 * @param {?proto.ErrorMessage|undefined} value
 * @return {!proto.SubToPusherRoomMessage} returns this
*/
proto.SubToPusherRoomMessage.prototype.setErrormessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.SubToPusherRoomMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.SubToPusherRoomMessage} returns this
 */
proto.SubToPusherRoomMessage.prototype.clearErrormessage = function() {
  return this.setErrormessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SubToPusherRoomMessage.prototype.hasErrormessage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional EditMapCommandMessage editMapCommandMessage = 3;
 * @return {?proto.EditMapCommandMessage}
 */
proto.SubToPusherRoomMessage.prototype.getEditmapcommandmessage = function() {
  return /** @type{?proto.EditMapCommandMessage} */ (
    jspb.Message.getWrapperField(this, proto.EditMapCommandMessage, 3));
};


/**
 * @param {?proto.EditMapCommandMessage|undefined} value
 * @return {!proto.SubToPusherRoomMessage} returns this
*/
proto.SubToPusherRoomMessage.prototype.setEditmapcommandmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.SubToPusherRoomMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.SubToPusherRoomMessage} returns this
 */
proto.SubToPusherRoomMessage.prototype.clearEditmapcommandmessage = function() {
  return this.setEditmapcommandmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SubToPusherRoomMessage.prototype.hasEditmapcommandmessage = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional JoinMucRoomMessage joinMucRoomMessage = 4;
 * @return {?proto.JoinMucRoomMessage}
 */
proto.SubToPusherRoomMessage.prototype.getJoinmucroommessage = function() {
  return /** @type{?proto.JoinMucRoomMessage} */ (
    jspb.Message.getWrapperField(this, proto.JoinMucRoomMessage, 4));
};


/**
 * @param {?proto.JoinMucRoomMessage|undefined} value
 * @return {!proto.SubToPusherRoomMessage} returns this
*/
proto.SubToPusherRoomMessage.prototype.setJoinmucroommessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.SubToPusherRoomMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.SubToPusherRoomMessage} returns this
 */
proto.SubToPusherRoomMessage.prototype.clearJoinmucroommessage = function() {
  return this.setJoinmucroommessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SubToPusherRoomMessage.prototype.hasJoinmucroommessage = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional LeaveMucRoomMessage leaveMucRoomMessage = 5;
 * @return {?proto.LeaveMucRoomMessage}
 */
proto.SubToPusherRoomMessage.prototype.getLeavemucroommessage = function() {
  return /** @type{?proto.LeaveMucRoomMessage} */ (
    jspb.Message.getWrapperField(this, proto.LeaveMucRoomMessage, 5));
};


/**
 * @param {?proto.LeaveMucRoomMessage|undefined} value
 * @return {!proto.SubToPusherRoomMessage} returns this
*/
proto.SubToPusherRoomMessage.prototype.setLeavemucroommessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.SubToPusherRoomMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.SubToPusherRoomMessage} returns this
 */
proto.SubToPusherRoomMessage.prototype.clearLeavemucroommessage = function() {
  return this.setLeavemucroommessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.SubToPusherRoomMessage.prototype.hasLeavemucroommessage = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.UserJoinedRoomMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.UserJoinedRoomMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.UserJoinedRoomMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UserJoinedRoomMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    uuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    ipaddress: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.UserJoinedRoomMessage}
 */
proto.UserJoinedRoomMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.UserJoinedRoomMessage;
  return proto.UserJoinedRoomMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.UserJoinedRoomMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.UserJoinedRoomMessage}
 */
proto.UserJoinedRoomMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setIpaddress(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.UserJoinedRoomMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.UserJoinedRoomMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.UserJoinedRoomMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UserJoinedRoomMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIpaddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string uuid = 1;
 * @return {string}
 */
proto.UserJoinedRoomMessage.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.UserJoinedRoomMessage} returns this
 */
proto.UserJoinedRoomMessage.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string ipAddress = 2;
 * @return {string}
 */
proto.UserJoinedRoomMessage.prototype.getIpaddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.UserJoinedRoomMessage} returns this
 */
proto.UserJoinedRoomMessage.prototype.setIpaddress = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.UserJoinedRoomMessage.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.UserJoinedRoomMessage} returns this
 */
proto.UserJoinedRoomMessage.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.UserLeftRoomMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.UserLeftRoomMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.UserLeftRoomMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UserLeftRoomMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    uuid: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.UserLeftRoomMessage}
 */
proto.UserLeftRoomMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.UserLeftRoomMessage;
  return proto.UserLeftRoomMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.UserLeftRoomMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.UserLeftRoomMessage}
 */
proto.UserLeftRoomMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.UserLeftRoomMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.UserLeftRoomMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.UserLeftRoomMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.UserLeftRoomMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string uuid = 1;
 * @return {string}
 */
proto.UserLeftRoomMessage.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.UserLeftRoomMessage} returns this
 */
proto.UserLeftRoomMessage.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ServerToAdminClientMessage.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.ServerToAdminClientMessage.MessageCase = {
  MESSAGE_NOT_SET: 0,
  USERJOINEDROOM: 1,
  USERLEFTROOM: 2,
  ERRORMESSAGE: 3
};

/**
 * @return {proto.ServerToAdminClientMessage.MessageCase}
 */
proto.ServerToAdminClientMessage.prototype.getMessageCase = function() {
  return /** @type {proto.ServerToAdminClientMessage.MessageCase} */(jspb.Message.computeOneofCase(this, proto.ServerToAdminClientMessage.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ServerToAdminClientMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.ServerToAdminClientMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ServerToAdminClientMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ServerToAdminClientMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    userjoinedroom: (f = msg.getUserjoinedroom()) && proto.UserJoinedRoomMessage.toObject(includeInstance, f),
    userleftroom: (f = msg.getUserleftroom()) && proto.UserLeftRoomMessage.toObject(includeInstance, f),
    errormessage: (f = msg.getErrormessage()) && proto.ErrorMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ServerToAdminClientMessage}
 */
proto.ServerToAdminClientMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ServerToAdminClientMessage;
  return proto.ServerToAdminClientMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ServerToAdminClientMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ServerToAdminClientMessage}
 */
proto.ServerToAdminClientMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.UserJoinedRoomMessage;
      reader.readMessage(value,proto.UserJoinedRoomMessage.deserializeBinaryFromReader);
      msg.setUserjoinedroom(value);
      break;
    case 2:
      var value = new proto.UserLeftRoomMessage;
      reader.readMessage(value,proto.UserLeftRoomMessage.deserializeBinaryFromReader);
      msg.setUserleftroom(value);
      break;
    case 3:
      var value = new proto.ErrorMessage;
      reader.readMessage(value,proto.ErrorMessage.deserializeBinaryFromReader);
      msg.setErrormessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ServerToAdminClientMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ServerToAdminClientMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ServerToAdminClientMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ServerToAdminClientMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserjoinedroom();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.UserJoinedRoomMessage.serializeBinaryToWriter
    );
  }
  f = message.getUserleftroom();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.UserLeftRoomMessage.serializeBinaryToWriter
    );
  }
  f = message.getErrormessage();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.ErrorMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional UserJoinedRoomMessage userJoinedRoom = 1;
 * @return {?proto.UserJoinedRoomMessage}
 */
proto.ServerToAdminClientMessage.prototype.getUserjoinedroom = function() {
  return /** @type{?proto.UserJoinedRoomMessage} */ (
    jspb.Message.getWrapperField(this, proto.UserJoinedRoomMessage, 1));
};


/**
 * @param {?proto.UserJoinedRoomMessage|undefined} value
 * @return {!proto.ServerToAdminClientMessage} returns this
*/
proto.ServerToAdminClientMessage.prototype.setUserjoinedroom = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.ServerToAdminClientMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ServerToAdminClientMessage} returns this
 */
proto.ServerToAdminClientMessage.prototype.clearUserjoinedroom = function() {
  return this.setUserjoinedroom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ServerToAdminClientMessage.prototype.hasUserjoinedroom = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional UserLeftRoomMessage userLeftRoom = 2;
 * @return {?proto.UserLeftRoomMessage}
 */
proto.ServerToAdminClientMessage.prototype.getUserleftroom = function() {
  return /** @type{?proto.UserLeftRoomMessage} */ (
    jspb.Message.getWrapperField(this, proto.UserLeftRoomMessage, 2));
};


/**
 * @param {?proto.UserLeftRoomMessage|undefined} value
 * @return {!proto.ServerToAdminClientMessage} returns this
*/
proto.ServerToAdminClientMessage.prototype.setUserleftroom = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.ServerToAdminClientMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ServerToAdminClientMessage} returns this
 */
proto.ServerToAdminClientMessage.prototype.clearUserleftroom = function() {
  return this.setUserleftroom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ServerToAdminClientMessage.prototype.hasUserleftroom = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional ErrorMessage errorMessage = 3;
 * @return {?proto.ErrorMessage}
 */
proto.ServerToAdminClientMessage.prototype.getErrormessage = function() {
  return /** @type{?proto.ErrorMessage} */ (
    jspb.Message.getWrapperField(this, proto.ErrorMessage, 3));
};


/**
 * @param {?proto.ErrorMessage|undefined} value
 * @return {!proto.ServerToAdminClientMessage} returns this
*/
proto.ServerToAdminClientMessage.prototype.setErrormessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.ServerToAdminClientMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ServerToAdminClientMessage} returns this
 */
proto.ServerToAdminClientMessage.prototype.clearErrormessage = function() {
  return this.setErrormessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ServerToAdminClientMessage.prototype.hasErrormessage = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.AdminPusherToBackMessage.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.AdminPusherToBackMessage.MessageCase = {
  MESSAGE_NOT_SET: 0,
  SUBSCRIBETOROOM: 1
};

/**
 * @return {proto.AdminPusherToBackMessage.MessageCase}
 */
proto.AdminPusherToBackMessage.prototype.getMessageCase = function() {
  return /** @type {proto.AdminPusherToBackMessage.MessageCase} */(jspb.Message.computeOneofCase(this, proto.AdminPusherToBackMessage.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AdminPusherToBackMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.AdminPusherToBackMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AdminPusherToBackMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AdminPusherToBackMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    subscribetoroom: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AdminPusherToBackMessage}
 */
proto.AdminPusherToBackMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AdminPusherToBackMessage;
  return proto.AdminPusherToBackMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AdminPusherToBackMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AdminPusherToBackMessage}
 */
proto.AdminPusherToBackMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubscribetoroom(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AdminPusherToBackMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AdminPusherToBackMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AdminPusherToBackMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AdminPusherToBackMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string subscribeToRoom = 1;
 * @return {string}
 */
proto.AdminPusherToBackMessage.prototype.getSubscribetoroom = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.AdminPusherToBackMessage} returns this
 */
proto.AdminPusherToBackMessage.prototype.setSubscribetoroom = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.AdminPusherToBackMessage.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.AdminPusherToBackMessage} returns this
 */
proto.AdminPusherToBackMessage.prototype.clearSubscribetoroom = function() {
  return jspb.Message.setOneofField(this, 1, proto.AdminPusherToBackMessage.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.AdminPusherToBackMessage.prototype.hasSubscribetoroom = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.MapStorageToBackMessage.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.MapStorageToBackMessage.MessageCase = {
  MESSAGE_NOT_SET: 0,
  MAPSTORAGEREFRESHMESSAGE: 1
};

/**
 * @return {proto.MapStorageToBackMessage.MessageCase}
 */
proto.MapStorageToBackMessage.prototype.getMessageCase = function() {
  return /** @type {proto.MapStorageToBackMessage.MessageCase} */(jspb.Message.computeOneofCase(this, proto.MapStorageToBackMessage.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MapStorageToBackMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.MapStorageToBackMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MapStorageToBackMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MapStorageToBackMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    mapstoragerefreshmessage: (f = msg.getMapstoragerefreshmessage()) && proto.MapStorageRefreshMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MapStorageToBackMessage}
 */
proto.MapStorageToBackMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MapStorageToBackMessage;
  return proto.MapStorageToBackMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MapStorageToBackMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MapStorageToBackMessage}
 */
proto.MapStorageToBackMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.MapStorageRefreshMessage;
      reader.readMessage(value,proto.MapStorageRefreshMessage.deserializeBinaryFromReader);
      msg.setMapstoragerefreshmessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MapStorageToBackMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MapStorageToBackMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MapStorageToBackMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MapStorageToBackMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMapstoragerefreshmessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.MapStorageRefreshMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional MapStorageRefreshMessage mapStorageRefreshMessage = 1;
 * @return {?proto.MapStorageRefreshMessage}
 */
proto.MapStorageToBackMessage.prototype.getMapstoragerefreshmessage = function() {
  return /** @type{?proto.MapStorageRefreshMessage} */ (
    jspb.Message.getWrapperField(this, proto.MapStorageRefreshMessage, 1));
};


/**
 * @param {?proto.MapStorageRefreshMessage|undefined} value
 * @return {!proto.MapStorageToBackMessage} returns this
*/
proto.MapStorageToBackMessage.prototype.setMapstoragerefreshmessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.MapStorageToBackMessage.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.MapStorageToBackMessage} returns this
 */
proto.MapStorageToBackMessage.prototype.clearMapstoragerefreshmessage = function() {
  return this.setMapstoragerefreshmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.MapStorageToBackMessage.prototype.hasMapstoragerefreshmessage = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MapStorageRefreshMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.MapStorageRefreshMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MapStorageRefreshMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MapStorageRefreshMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    comment: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MapStorageRefreshMessage}
 */
proto.MapStorageRefreshMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MapStorageRefreshMessage;
  return proto.MapStorageRefreshMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MapStorageRefreshMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MapStorageRefreshMessage}
 */
proto.MapStorageRefreshMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setComment(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MapStorageRefreshMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MapStorageRefreshMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MapStorageRefreshMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MapStorageRefreshMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getComment();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string comment = 1;
 * @return {string}
 */
proto.MapStorageRefreshMessage.prototype.getComment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.MapStorageRefreshMessage} returns this
 */
proto.MapStorageRefreshMessage.prototype.setComment = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MapStorageUrlMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.MapStorageUrlMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MapStorageUrlMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MapStorageUrlMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    mapurl: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MapStorageUrlMessage}
 */
proto.MapStorageUrlMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MapStorageUrlMessage;
  return proto.MapStorageUrlMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MapStorageUrlMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MapStorageUrlMessage}
 */
proto.MapStorageUrlMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMapurl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MapStorageUrlMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MapStorageUrlMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MapStorageUrlMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MapStorageUrlMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMapurl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string mapUrl = 1;
 * @return {string}
 */
proto.MapStorageUrlMessage.prototype.getMapurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.MapStorageUrlMessage} returns this
 */
proto.MapStorageUrlMessage.prototype.setMapurl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AdminMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.AdminMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AdminMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AdminMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, ""),
    recipientuuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    roomid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    type: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AdminMessage}
 */
proto.AdminMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AdminMessage;
  return proto.AdminMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AdminMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AdminMessage}
 */
proto.AdminMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRecipientuuid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoomid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AdminMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AdminMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AdminMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AdminMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRecipientuuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRoomid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.AdminMessage.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.AdminMessage} returns this
 */
proto.AdminMessage.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string recipientUuid = 2;
 * @return {string}
 */
proto.AdminMessage.prototype.getRecipientuuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.AdminMessage} returns this
 */
proto.AdminMessage.prototype.setRecipientuuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string roomId = 3;
 * @return {string}
 */
proto.AdminMessage.prototype.getRoomid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.AdminMessage} returns this
 */
proto.AdminMessage.prototype.setRoomid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string type = 4;
 * @return {string}
 */
proto.AdminMessage.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.AdminMessage} returns this
 */
proto.AdminMessage.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AdminRoomMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.AdminRoomMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AdminRoomMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AdminRoomMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, ""),
    roomid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    type: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AdminRoomMessage}
 */
proto.AdminRoomMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AdminRoomMessage;
  return proto.AdminRoomMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AdminRoomMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AdminRoomMessage}
 */
proto.AdminRoomMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoomid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AdminRoomMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AdminRoomMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AdminRoomMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AdminRoomMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRoomid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.AdminRoomMessage.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.AdminRoomMessage} returns this
 */
proto.AdminRoomMessage.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string roomId = 2;
 * @return {string}
 */
proto.AdminRoomMessage.prototype.getRoomid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.AdminRoomMessage} returns this
 */
proto.AdminRoomMessage.prototype.setRoomid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string type = 3;
 * @return {string}
 */
proto.AdminRoomMessage.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.AdminRoomMessage} returns this
 */
proto.AdminRoomMessage.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.AdminGlobalMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.AdminGlobalMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.AdminGlobalMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AdminGlobalMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.AdminGlobalMessage}
 */
proto.AdminGlobalMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.AdminGlobalMessage;
  return proto.AdminGlobalMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.AdminGlobalMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.AdminGlobalMessage}
 */
proto.AdminGlobalMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.AdminGlobalMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.AdminGlobalMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.AdminGlobalMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.AdminGlobalMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.AdminGlobalMessage.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.AdminGlobalMessage} returns this
 */
proto.AdminGlobalMessage.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.BanMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.BanMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.BanMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.BanMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    recipientuuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    roomid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    type: jspb.Message.getFieldWithDefault(msg, 3, ""),
    message: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.BanMessage}
 */
proto.BanMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.BanMessage;
  return proto.BanMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.BanMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.BanMessage}
 */
proto.BanMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRecipientuuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoomid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.BanMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.BanMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.BanMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.BanMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecipientuuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRoomid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string recipientUuid = 1;
 * @return {string}
 */
proto.BanMessage.prototype.getRecipientuuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.BanMessage} returns this
 */
proto.BanMessage.prototype.setRecipientuuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string roomId = 2;
 * @return {string}
 */
proto.BanMessage.prototype.getRoomid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.BanMessage} returns this
 */
proto.BanMessage.prototype.setRoomid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string type = 3;
 * @return {string}
 */
proto.BanMessage.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.BanMessage} returns this
 */
proto.BanMessage.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string message = 4;
 * @return {string}
 */
proto.BanMessage.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.BanMessage} returns this
 */
proto.BanMessage.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RoomDescription.prototype.toObject = function(opt_includeInstance) {
  return proto.RoomDescription.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RoomDescription} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RoomDescription.toObject = function(includeInstance, msg) {
  var f, obj = {
    roomid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    nbusers: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RoomDescription}
 */
proto.RoomDescription.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RoomDescription;
  return proto.RoomDescription.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RoomDescription} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RoomDescription}
 */
proto.RoomDescription.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoomid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNbusers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RoomDescription.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RoomDescription.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RoomDescription} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RoomDescription.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoomid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNbusers();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional string roomId = 1;
 * @return {string}
 */
proto.RoomDescription.prototype.getRoomid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.RoomDescription} returns this
 */
proto.RoomDescription.prototype.setRoomid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 nbUsers = 2;
 * @return {number}
 */
proto.RoomDescription.prototype.getNbusers = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.RoomDescription} returns this
 */
proto.RoomDescription.prototype.setNbusers = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.RoomsList.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.RoomsList.prototype.toObject = function(opt_includeInstance) {
  return proto.RoomsList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.RoomsList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RoomsList.toObject = function(includeInstance, msg) {
  var f, obj = {
    roomdescriptionList: jspb.Message.toObjectList(msg.getRoomdescriptionList(),
    proto.RoomDescription.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.RoomsList}
 */
proto.RoomsList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.RoomsList;
  return proto.RoomsList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.RoomsList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.RoomsList}
 */
proto.RoomsList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.RoomDescription;
      reader.readMessage(value,proto.RoomDescription.deserializeBinaryFromReader);
      msg.addRoomdescription(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.RoomsList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.RoomsList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.RoomsList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.RoomsList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoomdescriptionList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.RoomDescription.serializeBinaryToWriter
    );
  }
};


/**
 * repeated RoomDescription roomDescription = 1;
 * @return {!Array<!proto.RoomDescription>}
 */
proto.RoomsList.prototype.getRoomdescriptionList = function() {
  return /** @type{!Array<!proto.RoomDescription>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.RoomDescription, 1));
};


/**
 * @param {!Array<!proto.RoomDescription>} value
 * @return {!proto.RoomsList} returns this
*/
proto.RoomsList.prototype.setRoomdescriptionList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.RoomDescription=} opt_value
 * @param {number=} opt_index
 * @return {!proto.RoomDescription}
 */
proto.RoomsList.prototype.addRoomdescription = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.RoomDescription, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.RoomsList} returns this
 */
proto.RoomsList.prototype.clearRoomdescriptionList = function() {
  return this.setRoomdescriptionList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.EmptyMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.EmptyMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.EmptyMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.EmptyMessage.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.EmptyMessage}
 */
proto.EmptyMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.EmptyMessage;
  return proto.EmptyMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.EmptyMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.EmptyMessage}
 */
proto.EmptyMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.EmptyMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.EmptyMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.EmptyMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.EmptyMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.ChatMessagePrompt.oneofGroups_ = [[2,3]];

/**
 * @enum {number}
 */
proto.ChatMessagePrompt.MessageCase = {
  MESSAGE_NOT_SET: 0,
  JOINMUCROOMMESSAGE: 2,
  LEAVEMUCROOMMESSAGE: 3
};

/**
 * @return {proto.ChatMessagePrompt.MessageCase}
 */
proto.ChatMessagePrompt.prototype.getMessageCase = function() {
  return /** @type {proto.ChatMessagePrompt.MessageCase} */(jspb.Message.computeOneofCase(this, proto.ChatMessagePrompt.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.ChatMessagePrompt.prototype.toObject = function(opt_includeInstance) {
  return proto.ChatMessagePrompt.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.ChatMessagePrompt} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ChatMessagePrompt.toObject = function(includeInstance, msg) {
  var f, obj = {
    roomid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    joinmucroommessage: (f = msg.getJoinmucroommessage()) && proto.JoinMucRoomMessage.toObject(includeInstance, f),
    leavemucroommessage: (f = msg.getLeavemucroommessage()) && proto.LeaveMucRoomMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.ChatMessagePrompt}
 */
proto.ChatMessagePrompt.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.ChatMessagePrompt;
  return proto.ChatMessagePrompt.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.ChatMessagePrompt} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.ChatMessagePrompt}
 */
proto.ChatMessagePrompt.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoomid(value);
      break;
    case 2:
      var value = new proto.JoinMucRoomMessage;
      reader.readMessage(value,proto.JoinMucRoomMessage.deserializeBinaryFromReader);
      msg.setJoinmucroommessage(value);
      break;
    case 3:
      var value = new proto.LeaveMucRoomMessage;
      reader.readMessage(value,proto.LeaveMucRoomMessage.deserializeBinaryFromReader);
      msg.setLeavemucroommessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.ChatMessagePrompt.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.ChatMessagePrompt.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.ChatMessagePrompt} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.ChatMessagePrompt.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoomid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getJoinmucroommessage();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.JoinMucRoomMessage.serializeBinaryToWriter
    );
  }
  f = message.getLeavemucroommessage();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.LeaveMucRoomMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional string roomId = 1;
 * @return {string}
 */
proto.ChatMessagePrompt.prototype.getRoomid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.ChatMessagePrompt} returns this
 */
proto.ChatMessagePrompt.prototype.setRoomid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional JoinMucRoomMessage joinMucRoomMessage = 2;
 * @return {?proto.JoinMucRoomMessage}
 */
proto.ChatMessagePrompt.prototype.getJoinmucroommessage = function() {
  return /** @type{?proto.JoinMucRoomMessage} */ (
    jspb.Message.getWrapperField(this, proto.JoinMucRoomMessage, 2));
};


/**
 * @param {?proto.JoinMucRoomMessage|undefined} value
 * @return {!proto.ChatMessagePrompt} returns this
*/
proto.ChatMessagePrompt.prototype.setJoinmucroommessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.ChatMessagePrompt.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ChatMessagePrompt} returns this
 */
proto.ChatMessagePrompt.prototype.clearJoinmucroommessage = function() {
  return this.setJoinmucroommessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ChatMessagePrompt.prototype.hasJoinmucroommessage = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional LeaveMucRoomMessage leaveMucRoomMessage = 3;
 * @return {?proto.LeaveMucRoomMessage}
 */
proto.ChatMessagePrompt.prototype.getLeavemucroommessage = function() {
  return /** @type{?proto.LeaveMucRoomMessage} */ (
    jspb.Message.getWrapperField(this, proto.LeaveMucRoomMessage, 3));
};


/**
 * @param {?proto.LeaveMucRoomMessage|undefined} value
 * @return {!proto.ChatMessagePrompt} returns this
*/
proto.ChatMessagePrompt.prototype.setLeavemucroommessage = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.ChatMessagePrompt.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.ChatMessagePrompt} returns this
 */
proto.ChatMessagePrompt.prototype.clearLeavemucroommessage = function() {
  return this.setLeavemucroommessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.ChatMessagePrompt.prototype.hasLeavemucroommessage = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.JoinMucRoomMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.JoinMucRoomMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.JoinMucRoomMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoinMucRoomMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    mucroomdefinitionmessage: (f = msg.getMucroomdefinitionmessage()) && proto.MucRoomDefinitionMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.JoinMucRoomMessage}
 */
proto.JoinMucRoomMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.JoinMucRoomMessage;
  return proto.JoinMucRoomMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.JoinMucRoomMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.JoinMucRoomMessage}
 */
proto.JoinMucRoomMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.MucRoomDefinitionMessage;
      reader.readMessage(value,proto.MucRoomDefinitionMessage.deserializeBinaryFromReader);
      msg.setMucroomdefinitionmessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.JoinMucRoomMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.JoinMucRoomMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.JoinMucRoomMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.JoinMucRoomMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMucroomdefinitionmessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.MucRoomDefinitionMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional MucRoomDefinitionMessage mucRoomDefinitionMessage = 1;
 * @return {?proto.MucRoomDefinitionMessage}
 */
proto.JoinMucRoomMessage.prototype.getMucroomdefinitionmessage = function() {
  return /** @type{?proto.MucRoomDefinitionMessage} */ (
    jspb.Message.getWrapperField(this, proto.MucRoomDefinitionMessage, 1));
};


/**
 * @param {?proto.MucRoomDefinitionMessage|undefined} value
 * @return {!proto.JoinMucRoomMessage} returns this
*/
proto.JoinMucRoomMessage.prototype.setMucroomdefinitionmessage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.JoinMucRoomMessage} returns this
 */
proto.JoinMucRoomMessage.prototype.clearMucroomdefinitionmessage = function() {
  return this.setMucroomdefinitionmessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.JoinMucRoomMessage.prototype.hasMucroomdefinitionmessage = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.LeaveMucRoomMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.LeaveMucRoomMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.LeaveMucRoomMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.LeaveMucRoomMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.LeaveMucRoomMessage}
 */
proto.LeaveMucRoomMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.LeaveMucRoomMessage;
  return proto.LeaveMucRoomMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.LeaveMucRoomMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.LeaveMucRoomMessage}
 */
proto.LeaveMucRoomMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.LeaveMucRoomMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.LeaveMucRoomMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.LeaveMucRoomMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.LeaveMucRoomMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.LeaveMucRoomMessage.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.LeaveMucRoomMessage} returns this
 */
proto.LeaveMucRoomMessage.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.MucRoomDefinitionMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.MucRoomDefinitionMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.MucRoomDefinitionMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MucRoomDefinitionMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    type: jspb.Message.getFieldWithDefault(msg, 3, ""),
    subscribe: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.MucRoomDefinitionMessage}
 */
proto.MucRoomDefinitionMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.MucRoomDefinitionMessage;
  return proto.MucRoomDefinitionMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.MucRoomDefinitionMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.MucRoomDefinitionMessage}
 */
proto.MucRoomDefinitionMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSubscribe(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.MucRoomDefinitionMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.MucRoomDefinitionMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.MucRoomDefinitionMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.MucRoomDefinitionMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSubscribe();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.MucRoomDefinitionMessage.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.MucRoomDefinitionMessage} returns this
 */
proto.MucRoomDefinitionMessage.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.MucRoomDefinitionMessage.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.MucRoomDefinitionMessage} returns this
 */
proto.MucRoomDefinitionMessage.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string type = 3;
 * @return {string}
 */
proto.MucRoomDefinitionMessage.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.MucRoomDefinitionMessage} returns this
 */
proto.MucRoomDefinitionMessage.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool subscribe = 4;
 * @return {boolean}
 */
proto.MucRoomDefinitionMessage.prototype.getSubscribe = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.MucRoomDefinitionMessage} returns this
 */
proto.MucRoomDefinitionMessage.prototype.setSubscribe = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.XmppSettingsMessage.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.XmppSettingsMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.XmppSettingsMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.XmppSettingsMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.XmppSettingsMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    jid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    conferencedomain: jspb.Message.getFieldWithDefault(msg, 2, ""),
    roomsList: jspb.Message.toObjectList(msg.getRoomsList(),
    proto.MucRoomDefinitionMessage.toObject, includeInstance),
    jabberid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    jabberpassword: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.XmppSettingsMessage}
 */
proto.XmppSettingsMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.XmppSettingsMessage;
  return proto.XmppSettingsMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.XmppSettingsMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.XmppSettingsMessage}
 */
proto.XmppSettingsMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setJid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setConferencedomain(value);
      break;
    case 3:
      var value = new proto.MucRoomDefinitionMessage;
      reader.readMessage(value,proto.MucRoomDefinitionMessage.deserializeBinaryFromReader);
      msg.addRooms(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setJabberid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setJabberpassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.XmppSettingsMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.XmppSettingsMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.XmppSettingsMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.XmppSettingsMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getConferencedomain();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRoomsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.MucRoomDefinitionMessage.serializeBinaryToWriter
    );
  }
  f = message.getJabberid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getJabberpassword();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string jid = 1;
 * @return {string}
 */
proto.XmppSettingsMessage.prototype.getJid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.XmppSettingsMessage} returns this
 */
proto.XmppSettingsMessage.prototype.setJid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string conferenceDomain = 2;
 * @return {string}
 */
proto.XmppSettingsMessage.prototype.getConferencedomain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.XmppSettingsMessage} returns this
 */
proto.XmppSettingsMessage.prototype.setConferencedomain = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated MucRoomDefinitionMessage rooms = 3;
 * @return {!Array<!proto.MucRoomDefinitionMessage>}
 */
proto.XmppSettingsMessage.prototype.getRoomsList = function() {
  return /** @type{!Array<!proto.MucRoomDefinitionMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.MucRoomDefinitionMessage, 3));
};


/**
 * @param {!Array<!proto.MucRoomDefinitionMessage>} value
 * @return {!proto.XmppSettingsMessage} returns this
*/
proto.XmppSettingsMessage.prototype.setRoomsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.MucRoomDefinitionMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.MucRoomDefinitionMessage}
 */
proto.XmppSettingsMessage.prototype.addRooms = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.MucRoomDefinitionMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.XmppSettingsMessage} returns this
 */
proto.XmppSettingsMessage.prototype.clearRoomsList = function() {
  return this.setRoomsList([]);
};


/**
 * optional string jabberId = 4;
 * @return {string}
 */
proto.XmppSettingsMessage.prototype.getJabberid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.XmppSettingsMessage} returns this
 */
proto.XmppSettingsMessage.prototype.setJabberid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string jabberPassword = 5;
 * @return {string}
 */
proto.XmppSettingsMessage.prototype.getJabberpassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.XmppSettingsMessage} returns this
 */
proto.XmppSettingsMessage.prototype.setJabberpassword = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.BanUserByUuidMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.BanUserByUuidMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.BanUserByUuidMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.BanUserByUuidMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    playuri: jspb.Message.getFieldWithDefault(msg, 1, ""),
    uuidtoban: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    message: jspb.Message.getFieldWithDefault(msg, 4, ""),
    byuseremail: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.BanUserByUuidMessage}
 */
proto.BanUserByUuidMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.BanUserByUuidMessage;
  return proto.BanUserByUuidMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.BanUserByUuidMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.BanUserByUuidMessage}
 */
proto.BanUserByUuidMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlayuri(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuidtoban(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setByuseremail(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.BanUserByUuidMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.BanUserByUuidMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.BanUserByUuidMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.BanUserByUuidMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPlayuri();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUuidtoban();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getByuseremail();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string playUri = 1;
 * @return {string}
 */
proto.BanUserByUuidMessage.prototype.getPlayuri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.BanUserByUuidMessage} returns this
 */
proto.BanUserByUuidMessage.prototype.setPlayuri = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string uuidToBan = 2;
 * @return {string}
 */
proto.BanUserByUuidMessage.prototype.getUuidtoban = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.BanUserByUuidMessage} returns this
 */
proto.BanUserByUuidMessage.prototype.setUuidtoban = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.BanUserByUuidMessage.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.BanUserByUuidMessage} returns this
 */
proto.BanUserByUuidMessage.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string message = 4;
 * @return {string}
 */
proto.BanUserByUuidMessage.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.BanUserByUuidMessage} returns this
 */
proto.BanUserByUuidMessage.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string byUserEmail = 5;
 * @return {string}
 */
proto.BanUserByUuidMessage.prototype.getByuseremail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.BanUserByUuidMessage} returns this
 */
proto.BanUserByUuidMessage.prototype.setByuseremail = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * @enum {number}
 */
proto.AvailabilityStatus = {
  UNCHANGED: 0,
  ONLINE: 1,
  SILENT: 2,
  AWAY: 3,
  JITSI: 4,
  BBB: 5,
  DENY_PROXIMITY_MEETING: 6
};

goog.object.extend(exports, proto);
