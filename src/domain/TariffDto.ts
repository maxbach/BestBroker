export class TariffDto {
    commission: string; 
    url: string;
    name: string;
    imageUrl: string;
    broker: string;

    constructor(commission: string, url: string, name: string, imageUrl: string, broker: string) {
        this.commission = commission
        this.url = url
        this.name = name
        this.imageUrl = imageUrl
        this.broker = broker
    }
}