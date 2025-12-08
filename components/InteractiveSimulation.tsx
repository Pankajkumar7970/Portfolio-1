import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Database,
  Server,
  Smartphone,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Cpu,
} from "lucide-react";

const InteractiveSimulation: React.FC = () => {
  const [status, setStatus] = useState<
    "idle" | "request" | "processing" | "query" | "response" | "complete"
  >("idle");

  const triggerSimulation = () => {
    if (status !== "idle" && status !== "complete") return;

    // Sequence of the request lifecycle
    setStatus("request");
    setTimeout(() => setStatus("processing"), 1500); // Client -> Server
    setTimeout(() => setStatus("query"), 3000); // Server -> DB
    setTimeout(() => setStatus("response"), 4500); // DB -> Server -> Client
    setTimeout(() => setStatus("complete"), 6000); // Done
    setTimeout(() => setStatus("idle"), 8000); // Reset
  };

  return (
    <section
      id="simulation"
      className="py-24 bg-cream relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <div>
          <div className="inline-block border border-gold/50 rounded-full px-4 py-1 mb-6">
            <span className="text-xs font-bold tracking-widest text-gold uppercase">
              System Architecture
            </span>
          </div>
          <h2 className="font-serif text-5xl text-charcoal mb-6 leading-tight">
            The Digital <br />{" "}
            <span className="italic text-gold">Lifecycle</span>
          </h2>
          <p className="text-lg text-charcoal/70 mb-6 leading-relaxed">
            Every click triggers a complex journey. As a Full Stack developer, I
            architect secure, efficient pathways for data to travel from the
            user's device to the server and back.
          </p>
          <p className="text-lg text-charcoal/70 mb-8 leading-relaxed">
            <strong className="text-charcoal">Interactive Demo:</strong> Tap the{" "}
            <span className="font-bold border-b-2 border-gold text-charcoal">
              Start Request
            </span>{" "}
            button to visualize how a secure API call traverses the stack.
          </p>

          <button
            onClick={triggerSimulation}
            disabled={status !== "idle" && status !== "complete"}
            className={`
              px-8 py-4 rounded-full font-bold tracking-wider uppercase text-sm transition-all duration-300 flex items-center gap-3
              ${
                status === "idle" || status === "complete"
                  ? "bg-charcoal text-white shadow-lg hover:bg-gold hover:scale-105"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }
            `}
          >
            {status === "idle" || status === "complete"
              ? "Start Request"
              : "Processing..."}
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Visualizer Container - Dark Mode for Contrast */}
        <div className="relative bg-charcoal rounded-3xl p-8 md:p-12 shadow-2xl border border-gold/20 min-h-[500px] flex flex-col">
          {/* Header / Status Bar */}
          <div className="flex justify-between items-center mb-12 border-b border-white/10 pb-6">
            <div className="flex items-center gap-2">
              <div
                className={`w-2 h-2 rounded-full ${
                  status === "idle"
                    ? "bg-gray-500"
                    : "bg-green-500 animate-pulse"
                }`}
              />
              <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                System Status:{" "}
                {status === "idle" ? "STANDBY" : status.toUpperCase()}
              </span>
            </div>
            <div className="text-gold/50 text-xs font-mono">
              LATENCY: {status === "idle" ? "0ms" : "24ms"}
            </div>
          </div>

          {/* Architecture Diagram */}
          <div className="flex-1 relative flex items-center justify-between px-4">
            {/* Connecting Lines (Background) */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/10 -translate-y-1/2 z-0" />

            {/* Animated Data Packet */}
            {status !== "idle" && status !== "complete" && (
              <motion.div className="absolute top-1/2 left-0 w-full z-10 -translate-y-1/2 pointer-events-none">
                <motion.div
                  className="w-4 h-4 bg-gold rounded-full shadow-[0_0_20px_#A98E62]"
                  initial={{ left: "10%" }}
                  animate={{
                    left:
                      status === "request"
                        ? "50%"
                        : status === "processing"
                        ? "50%"
                        : status === "query"
                        ? "90%"
                        : status === "response"
                        ? "10%"
                        : "10%",
                  }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  style={{
                    position: "absolute",
                    transform: "translateY(-50%)",
                  }}
                />
              </motion.div>
            )}

            {/* Node 1: Client */}
            <div className="relative z-20 flex flex-col items-center gap-4">
              <motion.div
                animate={
                  status === "request" ||
                  status === "response" ||
                  status === "complete"
                    ? { scale: 1.1, borderColor: "#A98E62", color: "#A98E62" }
                    : {
                        scale: 1,
                        borderColor: "rgba(255,255,255,0.1)",
                        color: "#6b7280",
                      }
                }
                className="w-20 h-20 rounded-2xl bg-charcoal border-2 flex items-center justify-center transition-colors duration-500"
              >
                {status === "complete" ? (
                  <CheckCircle2 size={32} />
                ) : (
                  <Smartphone size={32} />
                )}
              </motion.div>
              <div className="text-center">
                <p className="text-white font-serif text-lg">Client</p>
                <p className="text-xs text-gray-500 font-mono">
                  React Native / Web
                </p>
              </div>
            </div>

            {/* Node 2: Server */}
            <div className="relative z-20 flex flex-col items-center gap-4">
              <motion.div
                animate={
                  status === "processing" ||
                  status === "query" ||
                  status === "response"
                    ? { scale: 1.1, borderColor: "#A98E62", color: "#A98E62" }
                    : {
                        scale: 1,
                        borderColor: "rgba(255,255,255,0.1)",
                        color: "#6b7280",
                      }
                }
                className="w-20 h-20 rounded-2xl bg-charcoal border-2 flex items-center justify-center transition-colors duration-500 relative"
              >
                <Cpu size={32} />
                {/* Security Shield Badge */}
                <div className="absolute -top-3 -right-3 bg-charcoal border border-gold rounded-full p-1 text-gold">
                  <ShieldCheck size={12} />
                </div>
              </motion.div>
              <div className="text-center">
                <p className="text-white font-serif text-lg">Server</p>
                <p className="text-xs text-gray-500 font-mono">
                  Node.js / Express
                </p>
              </div>
            </div>

            {/* Node 3: Database */}
            <div className="relative z-20 flex flex-col items-center gap-4">
              <motion.div
                animate={
                  status === "query"
                    ? {
                        scale: 1.1,
                        borderColor: "#A98E62",
                        color: "#A98E62",
                        rotate: [0, -5, 5, 0],
                      }
                    : {
                        scale: 1,
                        borderColor: "rgba(255,255,255,0.1)",
                        color: "#6b7280",
                      }
                }
                className="w-20 h-20 rounded-2xl bg-charcoal border-2 flex items-center justify-center transition-colors duration-500"
              >
                <Database size={32} />
              </motion.div>
              <div className="text-center">
                <p className="text-white font-serif text-lg">Database</p>
                <p className="text-xs text-gray-500 font-mono">MongoDB</p>
              </div>
            </div>
          </div>

          {/* Console Output Simulation */}
          <div className="mt-12 bg-black/40 rounded-lg p-4 font-mono text-xs text-gray-400 h-24 overflow-hidden border border-white/5">
            <div className="flex flex-col gap-1">
              <span className="opacity-50">&gt; System initialized...</span>
              <AnimatePresence>
                {status === "request" && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-blue-400"
                  >
                    &gt; POST /api/v1/user/auth [Pending]
                  </motion.span>
                )}
                {(status === "processing" ||
                  status === "query" ||
                  status === "response") && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-yellow-400"
                  >
                    &gt; Verifying JWT Token... OK
                  </motion.span>
                )}
                {(status === "query" || status === "response") && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-purple-400"
                  >
                    &gt; Querying Cluster0 (MongoDB Atlas)...
                  </motion.span>
                )}
                {(status === "response" || status === "complete") && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-green-400"
                  >
                    &gt; 200 OK - Data Payload Received
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveSimulation;
