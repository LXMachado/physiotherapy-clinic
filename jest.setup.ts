import '@testing-library/jest-dom';

// Polyfill TextEncoder/TextDecoder for jsdom
import { TextEncoder, TextDecoder } from 'util';
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder as any;
