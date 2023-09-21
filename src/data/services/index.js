

import {  useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useFeatchData = ({money})=>{
    return useQuery(
        ["money", money],
        () =>
          fetch(
            `https://64d08f7cff953154bb791252.mockapi.io/api/v1/PhoneNumber?money=${money}`
          ).then((res) => res.json()),
          {
            enabled: !!money
          }
    )
}

export const useChangePhoneInfo = ()=>{
    return useMutation(
        (params) =>
          axios.put(`https://64d08f7cff953154bb791252.mockapi.io/api/v1/PhoneNumber/` + params.id, params)
    )
}