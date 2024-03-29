export interface TariffViewState {
    commission: string; 
    url: string;
    name: string;
    imageUrl: string;
    conditionsUrl: string;
    broker: string;
    userInput: number;
    alertInfo: string | null;
    commissionFrequency: string | null;
}