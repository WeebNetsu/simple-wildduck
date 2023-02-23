import { urlQueryBuilder } from "@netsu/js-utils";
import { DefaultResponseModel, UserIdentifierModel } from "../../models";
import { axiosConf, wdData } from "../../setup";
import { URL } from "./config";
import { CreateNewFilterModel } from "./models";

/**
 * Create new Filter
 *
 * https://docs.wildduck.email/api/#operation/createFilter
 *
 * @param userId Users unique ID
 */
export const createNewFilter = async (
	userId: string
): Promise<CreateNewFilterModel> => {
	const url = urlQueryBuilder(`/users/${userId}`, {
		access_token: wdData.accessToken,
	});

	const res = await axiosConf.post(url);

	return res.data;
};