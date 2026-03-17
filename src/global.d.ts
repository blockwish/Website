export {};

declare global {
  interface Window {
    AOS?: {
      init: (options?: {
        duration?: number;
        once?: boolean;
        [key: string]: unknown;
      }) => void;
      refresh: () => void;
    };
  }
}
