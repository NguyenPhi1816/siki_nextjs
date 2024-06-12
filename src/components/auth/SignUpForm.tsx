"use client";
import { getDistrict, getProvince, getWard } from "@/services/address";
import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { FormEvent, useEffect, useState } from "react";
import AsyncSelect from "./AsyncSelect";
import { District, Province, Ward } from "@/types/address";
import { SignUpRequest } from "@/types/user";
import { useSignUpMutation } from "../../../lib/feartures/user/userApi";
import { redirect } from "next/navigation";

const SignUpForm = () => {
  const [province, setProvince] = useState<Province | null>(null);
  const [district, setDistrict] = useState<District | null>(null);
  const [ward, setWard] = useState<Ward | null>(null);
  const [signUp, { isLoading, data, error }] = useSignUpMutation();
  const [errorMessage, setErrorMessage] = useState<string>("");

  const _getProvince = async () => {
    const res = await getProvince();
    if (res.code === 200) {
      return res.data;
    }
    return [];
  };

  const _getDistrict = async () => {
    if (province) {
      const res = await getDistrict(province.ProvinceID);
      if (res.code === 200) {
        return res.data;
      }
    }
    return [];
  };

  const _getWard = async () => {
    if (district) {
      const res = await getWard(district.DistrictID);
      if (res.code === 200) {
        return res.data;
      }
    }
    return [];
  };

  const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email")?.toString();
    const phoneNumber = formData.get("phoneNumber")?.toString();
    const firstName = formData.get("firstName")?.toString();
    const lastName = formData.get("lastName")?.toString();
    const password = formData.get("password")?.toString();
    const dateOfBirth = formData.get("dateOfBirth")?.toString();
    const address = [
      formData.get("street")?.toString(),
      formData.get("ward")?.toString(),
      formData.get("district")?.toString(),
      formData.get("province")?.toString(),
    ].join(", ");

    if (
      email &&
      phoneNumber &&
      firstName &&
      lastName &&
      password &&
      dateOfBirth &&
      address
    ) {
      const signUpData: SignUpRequest = {
        email,
        address,
        phoneNumber,
        firstName,
        lastName,
        password,
        dateOfBirth,
      };
      const res = await signUp(signUpData);
    }
  };

  useEffect(() => {
    if (data) {
      redirect("/login");
    } else {
      setErrorMessage("Đăng ký không thành công");
    }
  }, [data]);

  const handleClearMessage = () => {
    setErrorMessage("");
  };

  return (
    <form onSubmit={handleSignUp} onFocus={handleClearMessage}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            autoComplete="given-name"
            name="firstName"
            required
            fullWidth
            id="firstName"
            label="Họ và tên đệm"
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="lastName"
            label="Tên"
            name="lastName"
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="email"
            label="Địa chỉ email"
            name="email"
            autoComplete="email"
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
            autoComplete="dateOfBirth"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <AsyncSelect
            name="province"
            id={"province"}
            label={"Tỉnh/Thành phố"}
            getData={_getProvince}
            onChange={(value: Province) => {
              if (value) setProvince(value);
            }}
            isOptionEqualToValue={(option: Province, value: Province) =>
              option.ProvinceID === value.ProvinceID
            }
            getOptionLabel={(option: Province) => option.ProvinceName}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <AsyncSelect
            name="district"
            id={"district"}
            label={"Quận/Huyện"}
            getData={_getDistrict}
            onChange={(value: District) => {
              if (value) setDistrict(value);
            }}
            isOptionEqualToValue={(option: District, value: District) =>
              option.DistrictID === value.DistrictID
            }
            getOptionLabel={(option: District) => option.DistrictName}
            disabled={!province}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <AsyncSelect
            name="ward"
            id={"ward"}
            label={"Phường/Xã"}
            getData={_getWard}
            onChange={(value: Ward) => {
              if (value) setWard(value);
            }}
            isOptionEqualToValue={(option: Ward, value: Ward) =>
              option.WardCode === value.WardCode
            }
            getOptionLabel={(option: Ward) => option.WardName}
            disabled={!district}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            id="street"
            label="Địa chỉ và đường"
            name="street"
            autoComplete="street"
            disabled={!ward}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            name="password"
            label="Mật khẩu"
            type="password"
            id="password"
            autoComplete="new-password"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            fullWidth
            name="confirmPassword"
            label="Nhập lại mật khẩu"
            type="password"
            id="confirmPassword"
            autoComplete="new-password"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox value="allowExtraEmails" color="primary" />}
            label="Tôi đồng ý với các điều khoản."
          />
        </Grid>
      </Grid>
      <Typography fontSize={"0.875rem"} color="var(--text-error)">
        {errorMessage}
      </Typography>
      <Button
        type="submit"
        fullWidth
        color="primary"
        variant="contained"
        sx={{ pt: 2, pb: 2, mt: 2, mb: 2 }}
      >
        {isLoading && (
          <CircularProgress
            color="inherit"
            size={"1.5rem"}
            sx={{ marginRight: "1rem" }}
          />
        )}
        <Typography
          component="h5"
          variant="body1"
          sx={{ fontWeight: 700, color: "var(--bg-white)" }}
        >
          Đăng ký
        </Typography>
      </Button>
    </form>
  );
};

export default SignUpForm;
