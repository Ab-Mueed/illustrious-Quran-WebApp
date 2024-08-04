import { Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const SummaryWindow = ({ summary, onClose }) => {
  return (
    <Box
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50"
    >
      <Box
        className="bg-white p-6 shadow-lg rounded-lg max-w-lg w-full"
      >
        <Box className="flex justify-between items-center mb-4">
          <Typography className="text-xl font-semibold text-gray-800">
            Summary
          </Typography>
          <IconButton
            onClick={onClose}
            className="text-gray-600 hover:text-gray-800"
          >
            <CloseIcon />
          </IconButton>
        </Box>
        <Typography className="text-gray-700">
          {summary}
        </Typography>
      </Box>
    </Box>
  );
};

export default SummaryWindow;
