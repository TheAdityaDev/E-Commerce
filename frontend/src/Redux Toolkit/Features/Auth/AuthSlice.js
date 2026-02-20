import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../../config/api.config";

const API_URL = "/auth";

const initialState = {
    token:null,
    role:null,
    loading:false,
    error:null,
    otpSent:false
}

export const sendLoginSignUpOtp = createAsyncThunk(
  "/auth/sendLoginSignUpOtp",
  async (email, { rejectWithValue }) => {
    try {
      const response = await axiosInstance().post(`${API_URL}/send-otp`, {
        email,
      });
      console.log(response);

      return response.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response.data);
    }
  },
);

export const signup = createAsyncThunk(
  "/auth/signup",
  async (singUpRequest, { rejectWithValue }) => {
    try {
      const response = await axiosInstance().post(`${API_URL}/signup`, {
        singUpRequest,
      });
      console.log(response);

      localStorage.setItem("token", response.data.token);
      singUpRequest.navigate("/");
      return response.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response.data);
    }
  },
);

export const signin = createAsyncThunk(
  "/auth/signin",
  async (singInRequest, { rejectWithValue }) => {
    try {
      const response = await axiosInstance().post(`${API_URL}/signin`, {
        singInRequest,
      });
      console.log(response);

      localStorage.setItem("token", response.data.token);
      singInRequest.navigate("/");
      return response.data;
    } catch (error) {
      console.error(error);
      return rejectWithValue(error.response.data);
    }
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout:(state)=>{
        state.token = null,
        state.role = null,
        state.otpSent = false
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendLoginSignUpOtp.pending, (state) => {
        state.loading = true;
      })
      .addCase(sendLoginSignUpOtp.fulfilled, (state, action) => {
        state.loading = false;
        state.otpResponse = action.payload;
      })
      .addCase(sendLoginSignUpOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(signup.pending, (state) => {
        state.loading = true;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.loading = false;
        state.signupResponse = action.payload;
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(signin.pending, (state) => {
        state.loading = true;
      })
      .addCase(signin.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.role = action.payload.role;
      })
      .addCase(signin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer