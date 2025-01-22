import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import Screenshot from "../entities/Screenshot";

const useScrenshots = (slug: string) => {
  const apiClient = new APIClient<Screenshot>("games/" + slug + "/screenshots");
  return useQuery({
    queryKey: ["screenshots", slug],
    queryFn: apiClient.getAll,
  });
};

export default useScrenshots;
