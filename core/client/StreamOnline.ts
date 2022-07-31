export default interface StreamOnline {
    event: string;
    onConnection(): void;
}