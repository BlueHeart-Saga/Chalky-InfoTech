export interface EmailData {
  toOverride?: string;
  fullName?: string;
  email: string;
  subject?: string;
  message?: string;
  company?: string;
  serviceType?: string;
  file?: File;
}

const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const result = reader.result as string;
      const base64 = result.includes(",") ? result.split(",")[1] : result;
      resolve(base64);
    };
    reader.onerror = (error) => reject(error);
  });
};

export const sendEmail = async (data: EmailData) => {
  let attachment: { filename: string; content: string; encoding: string } | undefined = undefined;

  if (data.file) {
    const base64Content = await fileToBase64(data.file);
    attachment = {
      filename: data.file.name,
      content: base64Content,
      encoding: "base64",
    };
  }

  const payload = {
    toOverride: data.toOverride,
    fullName: data.fullName,
    email: data.email,
    subject: data.subject,
    message: data.message,
    company: data.company,
    serviceType: data.serviceType,
    attachment,
  };

  const response = await fetch("/api/sendmail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const result = await response.json();
  if (!response.ok || !result.success) {
    throw new Error(result.message || `HTTP error! Status: ${response.status}`);
  }
  return result;
};

