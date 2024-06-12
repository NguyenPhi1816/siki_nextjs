"use client";

import { Box, Grid, TextField, Typography } from "@mui/material";
import Wrapper from "../wrapper/Wrapper";
import { useAppSelector } from "../../../lib/hooks";
import { selectTokens } from "../../../lib/feartures/auth/authSlice";
import { useGetProfileMutation } from "../../../lib/feartures/user/userApi";
import { useEffect, useState } from "react";
import { IAuthResponse } from "@/types/user";
import Image from "next/image";

const Profile = () => {
  const tokens = useAppSelector(selectTokens);
  const [getProfile, { data, error }] = useGetProfileMutation();
  const [user, setUser] = useState<IAuthResponse | null>(null);

  const getMyProfile = async (token: string) => {
    await getProfile(token);
  };

  useEffect(() => {
    if (!!tokens.accessToken && !!tokens.refreshToken) {
      getMyProfile(tokens.accessToken);
    }
  }, [tokens.accessToken, tokens.refreshToken]);

  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data]);

  return (
    <Wrapper>
      <Box
        sx={{
          marginTop: "1rem",
          padding: "1rem",
          bgcolor: "var(--bg-white)",
          borderRadius: 2,
        }}
      >
        <Typography fontSize={"1.25rem"} fontWeight={700} marginBottom={"1rem"}>
          Thông tin cá nhân
        </Typography>
        <Box
          sx={{
            marginBottom: "2rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Image
            src={
              user?.avatar
                ? user.avatar
                : (process.env.NEXT_PUBLIC_NO_USER_IMAGE as string)
            }
            alt="user avatar"
            width={200}
            height={200}
            style={{ borderRadius: "50%" }}
          />
        </Box>
        <form>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="Họ và tên đệm"
                defaultValue={user?.firstName}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Tên"
                name="lastName"
                defaultValue={user?.lastName}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="email"
                label="Địa chỉ email"
                name="email"
                autoComplete="email"
                defaultValue={user?.email}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="phoneNumber"
                label="Số điện thoại"
                name="phoneNumber"
                autoComplete="phoneNumber"
                defaultValue={user?.phoneNumber}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="dateOfBirth"
                label="Ngày sinh"
                type="date"
                name="dateOfBirth"
                value={user?.dateOfBirth}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="address"
                label="Địa chỉ"
                name="address"
                value={user?.address}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          </Grid>
        </form>
      </Box>
    </Wrapper>
  );
};

export default Profile;
