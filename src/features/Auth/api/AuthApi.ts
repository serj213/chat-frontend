import { IUser } from "../../../entites/user";
import { $rtkApi } from "../../../shared/api/rtkApi";
import { IRegisterForm } from "../models/types/registerFormType";

export const authApi = $rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<IUser, IRegisterForm>({
      query: (data: IRegisterForm) => ({
        url: `/api/user/registr`,
        method: "POST",
        body: data,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useRegisterMutation } = authApi;
