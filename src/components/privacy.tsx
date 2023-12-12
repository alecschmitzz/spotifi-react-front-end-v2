import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface PrivacyProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export function Privacy({ open, setOpen }: PrivacyProps) {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-h-96" style={{ overflow: "scroll" }}>
        <DialogHeader>
          <DialogTitle>Privacy Policy</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <p>
            This Privacy Policy describes how your personal information is
            collected, used, and shared when you use Spotifi, our music
            streaming platform.
          </p>
          <br />
          <h2>
            <strong>Information We Collect</strong>
          </h2>
          <p>
            We collect information you provide directly to us, such as your
            name, email address, and delivery details when you use Spotifi.
          </p>
          <br />
          <h2>
            <strong>How We Use Your Information</strong>
          </h2>
          <p>
            We use the information we collect to facilitate music streaming
            services. We do not sell or share your personal information with
            third parties for marketing purposes.
          </p>
          <br />
          <h2>
            <strong>Security</strong>
          </h2>
          <p>
            We take reasonable measures to protect the confidentiality and
            security of your personal information. However, we cannot guarantee
            that unauthorized third parties will never be able to defeat those
            measures or use your personal information for improper purposes.
          </p>
          <br />
          <h2>
            <strong>Cookies</strong>
          </h2>
          <p>
            We use cookies to enhance your experience on Spotifi. You can
            disable cookies in your browser settings, but this may affect the
            functionality of the platform.
          </p>
          <br />
          <h2>
            <strong>Changes to This Privacy Policy</strong>
          </h2>
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices. Your continued use of Spotifi after the
            effective date of the revised policy constitutes your acceptance of
            the terms.
          </p>
          <br />
          <h2>
            <strong>Contact Information</strong>
          </h2>
          <p>
            For questions or concerns about our Privacy Policy, please contact
            us at <a href="mailto:info@spotifi.nl">info@spotifi.nl</a>.
          </p>
          <p>This Privacy Policy was last updated on November 28, 2023.</p>
        </DialogDescription>
        <DialogFooter>
          <Button type="button" onClick={() => setOpen(false)}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
