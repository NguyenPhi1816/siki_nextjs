"use client";
import React, { useEffect } from "react";
import { useAppDispatch } from "../../../lib/hooks";
import { AuthState, setTokens } from "../../../lib/feartures/auth/authSlice";
import { useGetProfileMutation } from "../../../lib/feartures/user/userApi";
import { setUser } from "../../../lib/feartures/user/userSlice";

interface IStoreData {
  tokens: AuthState;
}

const StoreData: React.FC<IStoreData> = ({ tokens }) => {
  const dispatch = useAppDispatch();
  const [getProfile, { data, error }] = useGetProfileMutation();

  useEffect(() => {
    if (!!tokens.accessToken && !!tokens.refreshToken) {
      dispatch(setTokens(tokens));
      getMyProfile(tokens.accessToken);
    }
  }, [tokens.accessToken, tokens.refreshToken]);

  const getMyProfile = async (token: string) => {
    await getProfile(token);
  };

  useEffect(() => {
    if (data) {
      dispatch(setUser(data));
    }
  }, [data]);

  return <></>;
};

export default StoreData;
