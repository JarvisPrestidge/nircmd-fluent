export type Result<T = undefined> = T extends undefined
    ?
          | {
                success: true;
            }
          | {
                success: false;
                reason: string;
            }
    :
          | {
                success: true;
                result: T;
            }
          | {
                success: false;
                reason: string;
            };
