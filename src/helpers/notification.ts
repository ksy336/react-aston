import { notification } from 'antd';

type NotificationType = 'success' | 'info' | 'warning' | 'error';

interface NotificationConfig {
  message: string;
  description?: string;
}

const openNotification = (type: NotificationType, message: string, description?: string) => {
  const notificationsConfig: NotificationConfig = { message };
  if (description) {
    notificationsConfig.description = description;
  }
  notification[type](notificationsConfig);
}
export default openNotification;