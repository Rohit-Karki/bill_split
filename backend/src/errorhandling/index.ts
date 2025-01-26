export class ErrorHandler {
    public async handleError(error: Error, responseStream?: Response): Promise<void> {
    //   await logger.logError(error);
    //   await fireMonitoringMetric(error);
    //   await crashIfUntrustedErrorOrSendResponse(error, responseStream);
    };
  }