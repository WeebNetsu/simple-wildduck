export interface LimitUsageModel {
	allowed: number;
	used: number;
}

export interface LimitUsageTTLModel extends LimitUsageModel {
	ttl: number;
}

export enum AvailableEmailScopes {
	IMAP = "imap",
	POP3 = "pop3",
	SMTP = "smtp",
}

export interface DefaultResponseModel {
	/**
	 * Indicates successful response
	 */
	success: boolean;
}

export interface CreationResponseModel extends DefaultResponseModel {
	/**
	 * Id of the created item
	 */
	id: string;
}

export interface UserIdentifierModel {
	/**
	 * Session identifier for the logs
	 */
	sess?: string;
	/**
	 * IP address for the logs
	 */
	ip?: string;
}

export interface DefaultMailboxModel {
	sent: string;
	junk: string;
	drafts: string;
	trash: string;
}

export enum AvailableSpecialFolders {
	DRAFTS = "\\Drafts",
	JUNK = "\\Junk",
	SENT = "\\Sent",
	TRASH = "\\Trash",
}

export interface CursorResponseModel {
	/**
	 * Indicates successful response
	 */
	success: boolean;
	/**
	 * How many results were found
	 */
	total: number;
	/**
	 * Current page number. Derived from page query argument
	 */
	page: number;
	/**
	 * Either a cursor string or false if there are not any previous results
	 */
	previousCursor: string;
	/**
	 * Either a cursor string or false if there are not any next results
	 */
	nextCursor: string;
}
