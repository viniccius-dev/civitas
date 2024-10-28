export interface SelectOption {
    value: string;
    label: string;
  }
  
  export interface ClassRegistrationForm {
    anoLetivo: string;
    periodoLetivo: string;
    ensino: string;
    apelidoTurma: string;
  }
  
  export type AnoLetivoOption = SelectOption
  export type PeriodoLetivoOption = SelectOption
  export type EnsinoOption = SelectOption