// src/components/RequestDemoModal.tsx
import { useEffect, useId, useRef, useState } from "react";
import { ArrowRight, CalendarDays, Clock3, Mail, X } from "lucide-react";

type RequestDemoModalProps = {
  open: boolean;
  onClose: () => void;
  onSubmit?: (data: {
    email: string;
    preferredDate: string;
    preferredTime: string;
  }) => void;
};

export default function RequestDemoModal({
  open,
  onClose,
  onSubmit,
}: RequestDemoModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const emailId = useId();
  const dateId = useId();
  const timeId = useId();

  const [email, setEmail] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("");

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
    }

    if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleCancel = (e: Event) => {
      e.preventDefault();
      onClose();
    };

    const handleClose = () => {
      if (open) onClose();
    };

    dialog.addEventListener("cancel", handleCancel);
    dialog.addEventListener("close", handleClose);

    return () => {
      dialog.removeEventListener("cancel", handleCancel);
      dialog.removeEventListener("close", handleClose);
    };
  }, [onClose, open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleBackdropClick = (
    e: React.MouseEvent<HTMLDialogElement, MouseEvent>,
  ) => {
    const dialogDimensions = dialogRef.current?.getBoundingClientRect();
    if (!dialogDimensions) return;

    const isInDialog =
      e.clientX >= dialogDimensions.left &&
      e.clientX <= dialogDimensions.right &&
      e.clientY >= dialogDimensions.top &&
      e.clientY <= dialogDimensions.bottom;

    if (!isInDialog) {
      onClose();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      email: email.trim(),
      preferredDate,
      preferredTime,
    };

    if (onSubmit) {
      onSubmit(payload);
    } else {
      console.log("Request demo payload:", payload);
    }

    onClose();
  };

  return (
    <>
      <dialog
        ref={dialogRef}
        className="pw-demo-modal"
        aria-labelledby="pw-demo-modal-title"
        aria-describedby="pw-demo-modal-description"
        onClick={handleBackdropClick}
      >
        <div className="pw-demo-modal__shell">
          <div className="pw-demo-modal__grid" aria-hidden="true" />
          <div className="pw-demo-modal__glow" aria-hidden="true" />

          <button
            type="button"
            className="pw-demo-modal__close"
            onClick={onClose}
            aria-label="Close request demo modal"
          >
            <X size={16} strokeWidth={2} />
          </button>

          <div className="pw-demo-modal__eyebrow">
            <span className="pw-demo-modal__eyebrow-dot" />
            Request Demo
          </div>

          <h2 id="pw-demo-modal-title" className="pw-demo-modal__title">
            Schedule a <mark>Systems Demo.</mark>
          </h2>

          <p
            id="pw-demo-modal-description"
            className="pw-demo-modal__description"
          >
            Share your preferred contact email and a suitable date. We’ll follow
            up with a confirmed time and the right next steps.
          </p>

          <div className="pw-demo-modal__meta">
            <div className="pw-demo-modal__meta-item">
              <Mail size={15} strokeWidth={1.8} />
              <span>Direct follow-up</span>
            </div>
            <div className="pw-demo-modal__meta-item">
              <CalendarDays size={15} strokeWidth={1.8} />
              <span>Preferred date capture</span>
            </div>
            <div className="pw-demo-modal__meta-item">
              <Clock3 size={15} strokeWidth={1.8} />
              <span>Optional time window</span>
            </div>
          </div>

          <form className="pw-demo-modal__form" onSubmit={handleSubmit}>
            <div className="pw-demo-modal__field">
              <label htmlFor={emailId} className="pw-demo-modal__label">
                Email
                <span>*</span>
              </label>
              <input
                id={emailId}
                type="email"
                required
                autoComplete="email"
                className="pw-demo-modal__input"
                placeholder="name@organisation.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="pw-demo-modal__field-row">
              <div className="pw-demo-modal__field">
                <label htmlFor={dateId} className="pw-demo-modal__label">
                  Preferred Date
                  <span>*</span>
                </label>
                <input
                  id={dateId}
                  type="date"
                  required
                  className="pw-demo-modal__input"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                />
              </div>

              <div className="pw-demo-modal__field">
                <label htmlFor={timeId} className="pw-demo-modal__label">
                  Preferred Time
                </label>
                <input
                  id={timeId}
                  type="time"
                  className="pw-demo-modal__input"
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                />
              </div>
            </div>

            <div className="pw-demo-modal__actions">
              <button
                type="button"
                className="pw-demo-modal__btn-ghost"
                onClick={onClose}
              >
                Cancel
              </button>

              <button type="submit" className="pw-demo-modal__btn-primary">
                <span className="pw-demo-modal__btn-shimmer" />
                <span className="pw-demo-modal__btn-content">
                  Send Request
                  <ArrowRight size={15} strokeWidth={2.1} />
                </span>
              </button>
            </div>
          </form>
        </div>
      </dialog>

      <style>{`
        .pw-demo-modal {
          --pw-demo-red: #c81e1e;
          --pw-demo-red-strong: #b91c1c;
          --pw-demo-red-border: rgba(200, 30, 30, 0.18);

          --pw-demo-text-1: #0c1220;
          --pw-demo-text-2: #415168;
          --pw-demo-text-3: #8191a8;

          --pw-demo-border: rgba(15, 23, 42, 0.09);
          --pw-demo-border-strong: rgba(15, 23, 42, 0.12);

          --pw-demo-shadow:
            0 2px 6px rgba(15, 23, 42, 0.06),
            0 28px 80px rgba(15, 23, 42, 0.2);

          --pw-demo-mono: "DM Mono", "Fira Mono", monospace;

          width: min(680px, calc(100vw - 28px));
          max-width: 680px;
          margin: auto;
          padding: 0;
          border: none;
          background: transparent;
          overflow: visible;
        }

        .pw-demo-modal::backdrop {
          background:
            linear-gradient(180deg, rgba(7, 11, 18, 0.55), rgba(7, 11, 18, 0.68));
          backdrop-filter: blur(10px);
        }

        .pw-demo-modal__shell {
          position: relative;
          overflow: hidden;
          border-radius: 30px;
          border: 1px solid var(--pw-demo-border);
          background:
            linear-gradient(180deg, rgba(255,255,255,0.96), rgba(243,246,251,0.94));
          box-shadow: var(--pw-demo-shadow);
          padding: clamp(20px, 3vw, 34px);
        }

        .pw-demo-modal__grid,
        .pw-demo-modal__glow {
          pointer-events: none;
          position: absolute;
          inset: 0;
        }

        .pw-demo-modal__grid {
          background-image:
            linear-gradient(rgba(100, 116, 139, 0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(100, 116, 139, 0.035) 1px, transparent 1px);
          background-size: 24px 24px;
          mask-image: linear-gradient(145deg, rgba(0,0,0,0.45) 0%, transparent 62%);
        }

        .pw-demo-modal__glow {
          background:
            radial-gradient(circle at 0% 0%, rgba(200, 30, 30, 0.08), transparent 28%),
            radial-gradient(circle at 100% 0%, rgba(148, 163, 184, 0.12), transparent 30%);
        }

        .pw-demo-modal__close {
          position: absolute;
          top: 14px;
          right: 14px;
          z-index: 2;
          width: 40px;
          height: 40px;
          display: grid;
          place-items: center;
          border-radius: 999px;
          border: 1px solid rgba(15, 23, 42, 0.08);
          background: rgba(255,255,255,0.78);
          color: var(--pw-demo-text-2);
          cursor: pointer;
          transition:
            transform 180ms ease,
            border-color 180ms ease,
            color 180ms ease,
            background 180ms ease;
        }

        .pw-demo-modal__close:hover {
          transform: translateY(-1px);
          color: var(--pw-demo-red-strong);
          border-color: rgba(200, 30, 30, 0.18);
          background: rgba(255,255,255,0.96);
        }

        .pw-demo-modal__eyebrow,
        .pw-demo-modal__title,
        .pw-demo-modal__description,
        .pw-demo-modal__meta,
        .pw-demo-modal__form {
          position: relative;
          z-index: 1;
        }

        .pw-demo-modal__eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          margin-bottom: 1rem;
          padding: 6px 12px 6px 9px;
          border-radius: 999px;
          border: 1px solid var(--pw-demo-red-border);
          background: rgba(200, 30, 30, 0.06);
          color: var(--pw-demo-red-strong);
          font-family: var(--pw-demo-mono);
          font-size: 0.66rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
        }

        .pw-demo-modal__eyebrow-dot {
          width: 6px;
          height: 6px;
          border-radius: 999px;
          background: var(--pw-demo-red);
          box-shadow: 0 0 0 4px rgba(200, 30, 30, 0.1);
          flex-shrink: 0;
        }

        .pw-demo-modal__title {
          margin: 0 0 0.8rem;
          color: var(--pw-demo-text-1);
          font-size: 30px;
          line-height: 0.98;
          letter-spacing: -0.045em;
          max-width: 11ch;
        }

        .pw-demo-modal__title mark {
          background: none;
          color: var(--pw-demo-red);
        }

        .pw-demo-modal__description {
          margin: 0;
          max-width: 36rem;
          color: var(--pw-demo-text-2);
          font-size: 0.98rem;
          line-height: 1.8;
        }

        .pw-demo-modal__meta {
          margin-top: 1.35rem;
          display: flex;
          flex-wrap: wrap;
          gap: 0.7rem;
        }

        .pw-demo-modal__meta-item {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          min-height: 38px;
          padding: 0.55rem 0.8rem;
          border-radius: 999px;
          border: 1px solid rgba(15, 23, 42, 0.08);
          background: rgba(255,255,255,0.78);
          color: var(--pw-demo-text-2);
          font-family: var(--pw-demo-mono);
          font-size: 0.64rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .pw-demo-modal__form {
          margin-top: 1.55rem;
        }

        .pw-demo-modal__field-row {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1rem;
        }

        .pw-demo-modal__field {
          margin-bottom: 1rem;
        }

        .pw-demo-modal__label {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.6rem;
          margin-bottom: 0.45rem;
          color: var(--pw-demo-text-1);
          font-size: 0.82rem;
          font-weight: 600;
          letter-spacing: -0.01em;
        }

        .pw-demo-modal__label span {
          color: var(--pw-demo-red-strong);
          font-family: var(--pw-demo-mono);
          font-size: 0.66rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
        }

        .pw-demo-modal__input {
          width: 100%;
          appearance: none;
          border: 1px solid var(--pw-demo-border-strong);
          border-radius: 14px;
          background: rgba(255,255,255,0.88);
          color: var(--pw-demo-text-1);
          padding: 0.9rem 0.95rem;
          font-size: 0.95rem;
          line-height: 1.5;
          outline: none;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.84);
          transition:
            border-color 180ms ease,
            box-shadow 180ms ease,
            background 180ms ease,
            transform 180ms ease;
        }

        .pw-demo-modal__input:focus {
          border-color: rgba(200, 30, 30, 0.34);
          background: rgba(255,255,255,0.98);
          box-shadow: 0 0 0 4px rgba(200, 30, 30, 0.08);
          transform: translateY(-1px);
        }

        .pw-demo-modal__actions {
          margin-top: 1.4rem;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 0.8rem;
        }

        .pw-demo-modal__btn-ghost,
        .pw-demo-modal__btn-primary {
          min-height: 48px;
          border-radius: 999px;
          cursor: pointer;
          transition:
            transform 180ms ease,
            border-color 180ms ease,
            color 180ms ease,
            background 180ms ease,
            box-shadow 220ms ease;
        }

        .pw-demo-modal__btn-ghost {
          padding: 0.8rem 1.1rem;
          border: 1px solid rgba(15, 23, 42, 0.1);
          background: rgba(255,255,255,0.74);
          color: var(--pw-demo-text-1);
          font-family: var(--pw-demo-mono);
          font-size: 0.73rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .pw-demo-modal__btn-ghost:hover {
          transform: translateY(-1px);
          border-color: rgba(200, 30, 30, 0.18);
          color: var(--pw-demo-red-strong);
        }

        .pw-demo-modal__btn-primary {
          position: relative;
          overflow: hidden;
          border: none;
          padding: 0.82rem 1.35rem;
          background: linear-gradient(180deg, #d12727, #b91c1c);
          color: #ffffff;
          box-shadow:
            0 14px 28px rgba(185, 28, 28, 0.24),
            inset 0 1px 0 rgba(255,255,255,0.22);
          font-family: var(--pw-demo-mono);
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .pw-demo-modal__btn-primary:hover {
          transform: translateY(-2px);
          box-shadow:
            0 18px 36px rgba(185, 28, 28, 0.28),
            inset 0 1px 0 rgba(255,255,255,0.24);
        }

        .pw-demo-modal__btn-shimmer {
          position: absolute;
          inset: 0;
          width: 42%;
          background: linear-gradient(
            105deg,
            transparent 0%,
            rgba(255,255,255,0.34) 50%,
            transparent 100%
          );
          transform: translateX(-130%);
          pointer-events: none;
        }

        .pw-demo-modal__btn-primary:hover .pw-demo-modal__btn-shimmer {
          animation: pwDemoSweep 900ms ease;
        }

        @keyframes pwDemoSweep {
          0% { transform: translateX(-130%); }
          100% { transform: translateX(280%); }
        }

        .pw-demo-modal__btn-content {
          position: relative;
          z-index: 1;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        @media (max-width: 720px) {
          .pw-demo-modal {
            width: min(100vw - 18px, 100%);
          }

          .pw-demo-modal__shell {
            padding: 18px;
            border-radius: 24px;
          }

          .pw-demo-modal__title {
            font-size: clamp(1.65rem, 9vw, 2.2rem);
            max-width: 12ch;
          }

          .pw-demo-modal__description {
            font-size: 0.94rem;
            line-height: 1.72;
          }

          .pw-demo-modal__field-row {
            grid-template-columns: minmax(0, 1fr);
            gap: 0;
          }

          .pw-demo-modal__input {
            font-size: 16px;
          }

          .pw-demo-modal__actions {
            flex-direction: column-reverse;
            align-items: stretch;
          }

          .pw-demo-modal__btn-ghost,
          .pw-demo-modal__btn-primary {
            width: 100%;
          }
        }

        @media (max-width: 420px) {
          .pw-demo-modal__shell {
            padding: 16px;
          }

          .pw-demo-modal__meta {
            gap: 0.55rem;
          }

          .pw-demo-modal__meta-item {
            width: 100%;
            justify-content: flex-start;
          }
        }
      `}</style>
    </>
  );
}
