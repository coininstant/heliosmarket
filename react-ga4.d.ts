declare module "react-ga4" {
    interface TrackingConfig {
      trackingId: string;
      gaOptions?: any; // You can define the type based on your needs
      gtagOptions?: any; // You can define the type based on your needs
    }
  
    interface FieldsObject {
      [key: string]: any;
    }
  
    interface EventOptions {
      category: string;
      action: string;
      label?: string;
      value?: number;
      nonInteraction?: boolean;
      transport?: 'beacon' | 'xhr' | 'image';
    }
  
    interface PageViewOptions {
      hitType: "pageview";
      page: string;
      title: string;
    }
  
    class ReactGA {
      static initialize(trackingId: string | TrackingConfig[]): void;
      static set(fieldsObject: FieldsObject): void;
      static event(options: EventOptions): void;
      static send(options: PageViewOptions | EventOptions): void;
      static gtag(...args: any[]): void;
      static ga(...args: any[]): void;
    }
  
    export default ReactGA;
  }
  