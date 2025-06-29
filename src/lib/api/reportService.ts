import { ApprovalPayload, CreateReportPayload, GenerateRankingPayload, GenerateRankingResponse, PreviewRankingRequest, ReportData, ReportResponse } from "@/types/report";
import axiosInstance from "./axios";
import { RankingInput } from "@/types/ranking";

const API_URL = process.env.NEXT_PUBLIC_API_URL + "/reports"

export const generateRankingFromSupplyData = async (
  data: RankingInput
): Promise<GenerateRankingResponse> => {
  const response = await axiosInstance.post(`${API_URL}/generate_rankSupplier`, data);
  return response.data;
};

export const createReport = async (data: CreateReportPayload) => {
  const response = await axiosInstance.post(`${API_URL}/create-report`, data)
  return response.data;
};

export const generateRanking = async (
  data: GenerateRankingPayload
): Promise<GenerateRankingResponse> => {
    const response = await axiosInstance.post(`${API_URL}/generate_rankSupplier`, data);
    return response.data;
};

// NEW: Function to check PDF generation status
export const checkPDFStatus = async (reportId: number): Promise<{
  pdf_ready: boolean;
  pdf_url?: string;
}> => {
  const response = await axiosInstance.get(`${API_URL}/${reportId}/pdf-status`);
  return response.data;
};

export const getAllReports = async (): Promise<ReportResponse[]> => {
  const response = await axiosInstance.get(API_URL);
  return response.data;
};

export const getReportByIdStaff = async (staff_id: number): Promise<ReportResponse[]> => {
  const response = await axiosInstance.get(`${API_URL}/staffReport/${staff_id}`);
  return response.data;
};

export const getReportByCatatanId = async (
  catatan_supply_id: number
): Promise<ReportData> => {
  const response = await axiosInstance.get(`${API_URL}/by-catatan/${catatan_supply_id}`);
  return response.data;
};

export const updateApproval = async (
  report_id: number,
  data: ApprovalPayload
): Promise<{ message: string }> => {
  const response = await axiosInstance.put(`${API_URL}/${report_id}/approval`, data);
  return response.data;
};

export const generatePDF = async (
  report_id: number
): Promise<{ message: string; url: string }> => {
  const response = await axiosInstance.get(`${API_URL}/${report_id}/pdf`);
  return response.data;
};

// FIXED: Template literal syntax error
export const previewRanking = async (data: PreviewRankingRequest) => {
  const response = await axiosInstance.post(`${API_URL}/preview-ranking`, data);
  return response.data;
};

