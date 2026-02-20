import { Box, TextField } from "@mui/material";

const SellerStep1 = ({ formik  }) => {
  return (
    <Box>
      <p className="text-xl font-bold text-center pb-9">Contact Details</p>
      <div className="p-5 space-y-5  md:p-5 lg:p-10">
        <div>
          <TextField
            fullWidth
            id="mobile"
            type="tel"
            label="Mobile"
            name="mobile"
            enterKeyHint="next"
            value={formik.values.mobile}
            onChange={formik.handleChange}
            error={formik.touched.mobile && Boolean(formik.errors.mobile)}
            helperText={formik.touched.mobile && formik.errors.mobile}
          />
        </div>
        <div>
          <TextField
            fullWidth
            id="GSTIN"
            type="text"
            label="GSTIN"
            name="GSTIN"
            enterKeyHint="next"
            value={formik.values.GSTIN}
            onChange={formik.handleChange}
            error={formik.touched.GSTIN && Boolean(formik.errors.GSTIN)}
            helperText={formik.touched.GSTIN && formik.errors.GSTIN}
          />
        </div>
      </div>
    </Box>
  );
};

export default SellerStep1;
