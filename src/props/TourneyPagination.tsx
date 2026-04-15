import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import * as React from "react";

interface TourneyPaginationProps {
    count: number;
    page: number;
    onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

export default function TouneryPagination({ count, page, onChange }: TourneyPaginationProps) {
    return (
        <Stack spacing={2}>
            <Pagination
                count={count}
                page={page}
                onChange={onChange}
                shape="rounded"
                variant="outlined"
                size="large"
            />
        </Stack>
    );
}
