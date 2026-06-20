// app/account/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  User,
  Mail,
  Lock,
  Settings,
  Film,
  Heart,
  Clock,
  LogOut,
  Edit2,
  Check,
  X,
  AlertCircle,
  Camera,
  Shield,
  Bell,
  Moon,
  Sun,
  ChevronRight,
} from "lucide-react";

// ===== SAMPLE USER DATA =====
const USER_DATA = {
  name: "John Doe",
  email: "john@example.com",
  avatar:
    "https://ui-avatars.com/api/?name=John+Doe&background=f5c800&color=000&size=128",
  joinDate: "2024-01-15",
  watchlistCount: 12,
  favoritesCount: 7,
  watchedCount: 45,
};

export default function AccountPage() {
  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [userData, setUserData] = useState(USER_DATA);
  const [formData, setFormData] = useState({
    name: userData.name,
    email: userData.email,
  });

  const [notifications, setNotifications] = useState({
    emailAlerts: true,
    newMovies: true,
    recommendations: true,
    watchReminders: false,
  });

  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const handleSaveProfile = () => {
    setUserData({
      ...userData,
      name: formData.name,
      email: formData.email,
    });
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setFormData({
      name: userData.name,
      email: userData.email,
    });
    setIsEditing(false);
  };

  const handleLogout = () => {
    console.log("Logging out...");
    // Add logout logic here
  };

  return (
    <main className="min-h-screen bg-black py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-1 h-8 bg-yellow-400 rounded-full" />
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            My <span className="text-yellow-400">Account</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* ===== SIDEBAR ===== */}
          <div className="lg:col-span-1">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
              {/* Profile Card */}
              <div className="text-center">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <Image
                    src={userData.avatar}
                    alt={userData.name}
                    width={96}
                    height={96}
                    className="rounded-full border-2 border-yellow-400/30"
                  />
                  <button className="absolute bottom-0 right-0 p-1.5 bg-yellow-400 rounded-full hover:bg-yellow-500 transition">
                    <Camera size={14} className="text-black" />
                  </button>
                </div>

                {isEditing ? (
                  <div className="space-y-3">
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-yellow-400/50 transition"
                      placeholder="Full Name"
                    />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-yellow-400/50 transition"
                      placeholder="Email"
                    />
                    <div className="flex gap-2">
                      <button
                        onClick={handleSaveProfile}
                        className="flex-1 px-4 py-2 bg-yellow-400 text-black text-sm font-bold rounded-lg hover:bg-yellow-500 transition"
                      >
                        <Check size={16} className="inline mr-1" />
                        Save
                      </button>
                      <button
                        onClick={handleCancelEdit}
                        className="px-4 py-2 bg-white/10 text-white text-sm rounded-lg hover:bg-white/20 transition"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-bold text-white">
                      {userData.name}
                    </h2>
                    <p className="text-gray-400 text-sm">{userData.email}</p>
                    <p className="text-gray-500 text-xs mt-2">
                      Joined {new Date(userData.joinDate).toLocaleDateString()}
                    </p>
                    <button
                      onClick={() => setIsEditing(true)}
                      className="mt-4 px-4 py-2 bg-white/5 hover:bg-yellow-400/10 border border-white/10 hover:border-yellow-400/30 rounded-lg text-yellow-400 text-sm font-medium transition-all duration-300 flex items-center gap-2 mx-auto"
                    >
                      <Edit2 size={14} />
                      Edit Profile
                    </button>
                  </>
                )}
              </div>

              {/* Stats */}
              <div className="border-t border-white/5 mt-6 pt-6">
                <div className="grid grid-cols-3 gap-3">
                  <div className="text-center">
                    <div className="text-xl font-bold text-yellow-400">
                      {userData.watchlistCount}
                    </div>
                    <div className="text-[10px] text-gray-500">Watchlist</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-yellow-400">
                      {userData.favoritesCount}
                    </div>
                    <div className="text-[10px] text-gray-500">Favorites</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-yellow-400">
                      {userData.watchedCount}
                    </div>
                    <div className="text-[10px] text-gray-500">Watched</div>
                  </div>
                </div>
              </div>

              {/* Logout */}
              <button
                onClick={() => setShowDeleteConfirm(true)}
                className="w-full mt-6 px-4 py-2.5 bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 rounded-lg text-red-400 text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2"
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          </div>

          {/* ===== MAIN CONTENT ===== */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Actions */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                {
                  icon: <Film size={18} />,
                  label: "My Videos",
                  href: "/my-videos",
                  color: "text-yellow-400",
                },
                {
                  icon: <Heart size={18} />,
                  label: "Favorites",
                  href: "/favorites",
                  color: "text-red-400",
                },
                {
                  icon: <Clock size={18} />,
                  label: "Watchlist",
                  href: "/watchlist",
                  color: "text-blue-400",
                },
                {
                  icon: <Settings size={18} />,
                  label: "Settings",
                  href: "#",
                  color: "text-gray-400",
                },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="group bg-white/5 hover:bg-white/10 border border-white/5 hover:border-yellow-400/30 rounded-xl p-4 text-center transition-all duration-300"
                >
                  <div
                    className={`${item.color} mb-1 group-hover:scale-110 transition-transform`}
                  >
                    {item.icon}
                  </div>
                  <span className="text-xs text-gray-400 group-hover:text-white transition">
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>

            {/* Recently Watched */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white">
                  Recently Watched
                </h3>
                <Link
                  href="/my-videos"
                  className="text-yellow-400 text-sm hover:text-yellow-300 transition flex items-center gap-1"
                >
                  View All
                  <ChevronRight size={14} />
                </Link>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Link
                    key={i}
                    href={`/movie/${i}`}
                    className="group relative aspect-2/3 rounded-lg overflow-hidden bg-white/5"
                  >
                    <div className="w-full h-full bg-linear-to-b from-white/5 to-black/50 flex items-center justify-center">
                      <span className="text-gray-600 text-xs">Movie {i}</span>
                    </div>
                    <div className="absolute inset-0 bg-yellow-400/0 group-hover:bg-yellow-400/10 transition-colors duration-300" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Preferences */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
              <h3 className="text-lg font-bold text-white mb-4">Preferences</h3>
              <div className="space-y-4">
                {/* Theme */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {theme === "dark" ? (
                      <Moon size={18} className="text-yellow-400" />
                    ) : (
                      <Sun size={18} className="text-yellow-400" />
                    )}
                    <span className="text-sm text-gray-300">Theme</span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setTheme("dark")}
                      className={`px-3 py-1 rounded-lg text-xs font-medium transition ${
                        theme === "dark"
                          ? "bg-yellow-400 text-black"
                          : "bg-white/10 text-gray-400 hover:text-white"
                      }`}
                    >
                      Dark
                    </button>
                    <button
                      onClick={() => setTheme("light")}
                      className={`px-3 py-1 rounded-lg text-xs font-medium transition ${
                        theme === "light"
                          ? "bg-yellow-400 text-black"
                          : "bg-white/10 text-gray-400 hover:text-white"
                      }`}
                    >
                      Light
                    </button>
                  </div>
                </div>

                {/* Notifications */}
                <div className="border-t border-white/5 pt-4">
                  <div className="flex items-center gap-3 mb-3">
                    <Bell size={18} className="text-yellow-400" />
                    <span className="text-sm text-gray-300">Notifications</span>
                  </div>
                  <div className="space-y-2">
                    {[
                      {
                        key: "emailAlerts",
                        label: "Email Alerts",
                        desc: "Receive email notifications",
                      },
                      {
                        key: "newMovies",
                        label: "New Movies",
                        desc: "Get notified about new releases",
                      },
                      {
                        key: "recommendations",
                        label: "Recommendations",
                        desc: "Personalized movie suggestions",
                      },
                      {
                        key: "watchReminders",
                        label: "Watch Reminders",
                        desc: "Remind me about movies in my watchlist",
                      },
                    ].map((item) => (
                      <div
                        key={item.key}
                        className="flex items-center justify-between"
                      >
                        <div>
                          <span className="text-sm text-gray-300">
                            {item.label}
                          </span>
                          <p className="text-xs text-gray-500">{item.desc}</p>
                        </div>
                        <button
                          onClick={() =>
                            setNotifications({
                              ...notifications,
                              [item.key]:
                                !notifications[
                                  item.key as keyof typeof notifications
                                ],
                            })
                          }
                          className={`w-10 h-6 rounded-full transition-colors ${
                            notifications[
                              item.key as keyof typeof notifications
                            ]
                              ? "bg-yellow-400"
                              : "bg-white/20"
                          }`}
                        >
                          <div
                            className={`w-5 h-5 rounded-full bg-white shadow-md transition-transform ${
                              notifications[
                                item.key as keyof typeof notifications
                              ]
                                ? "translate-x-4"
                                : "translate-x-0"
                            }`}
                          />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Security */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
              <div className="flex items-center gap-3 mb-4">
                <Shield size={18} className="text-yellow-400" />
                <h3 className="text-lg font-bold text-white">Security</h3>
              </div>
              <button className="w-full text-left px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/5 rounded-lg text-gray-300 text-sm transition flex items-center justify-between">
                <span>Change Password</span>
                <ChevronRight size={16} className="text-gray-500" />
              </button>
            </div>
          </div>
        </div>

        {/* Logout Confirmation Modal */}
        {showDeleteConfirm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
            <div className="bg-black/90 border border-yellow-400/20 rounded-2xl p-8 max-w-md w-full">
              <div className="text-center">
                <AlertCircle size={48} className="text-red-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Logout?</h3>
                <p className="text-gray-400 text-sm mb-6">
                  Are you sure you want to logout from your account?
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={() => setShowDeleteConfirm(false)}
                    className="flex-1 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-white text-sm transition"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleLogout}
                    className="flex-1 px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg text-white text-sm font-medium transition"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
