import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import CalendarToday from "@mui/icons-material/CalendarToday";
import FilterList from "@mui/icons-material/FilterList";
import Person from "@mui/icons-material/Person";
import { Box, Button, Stack } from "@mui/material";

const filterOptions = [
  {
    label: "Today",
    icon: CalendarToday,
  },
  {
    label: "All Statuses",
    icon: FilterList,
  },
  {
    label: "All Assignees",
    icon: Person,
  },
];

export default function ROListFilter() {
  return (
    <Box className="my-10">
      <Stack
        direction="row"
        spacing={1.5}
        sx={{
          flexWrap: "wrap",
          alignItems: "flex-start",
        }}
      >
        {filterOptions.map((option, index) => {
          const IconComponent = option.icon;
          return (
            <Button
              key={option.label}
              variant="contained"
              startIcon={<IconComponent sx={{ fontSize: 16 }} />}
              endIcon={<ArrowDropDown sx={{ fontSize: 16 }} />}
              sx={{
                backgroundColor: "#28382d",
                color: "white",
                fontFamily: "Geist, Helvetica",
                fontWeight: 500,
                fontSize: "14px",
                textTransform: "none",
                borderRadius: 1,
                px: 2,
                py: 1,
                height: 40,
                minWidth: "fit-content",
                "&:hover": {
                  backgroundColor: "#1e2a22",
                },
                "& .MuiButton-startIcon": {
                  marginRight: 1,
                },
                "& .MuiButton-endIcon": {
                  marginLeft: 1,
                },
              }}
            >
              {option.label}
            </Button>
          );
        })}
      </Stack>
    </Box>
  );
};
