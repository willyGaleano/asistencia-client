import { requestAPI } from "./api";

export const asistenciaAPI = {
  marcarAsistencia: (id, body) =>
    requestAPI.patch(`/Asistencia/MarcarAsistenciaAsync/${id}`, body),
};
