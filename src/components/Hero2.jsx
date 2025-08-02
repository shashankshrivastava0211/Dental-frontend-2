import { ArrowDown } from "lucide-react";

const Hero2 = ({
	badgeIcon: BadgeIcon,
	badgeText,
	heading,
	headingHighlight,
	headingEnd,
	description,
	primaryButtonText,
	primaryButtonAction,
	secondaryButtonText,
	secondaryButtonIcon: SecondaryButtonIcon,
	secondaryButtonAction,
	imageSrc,
	imageAlt,
	floatingBadgeIcon: FloatingBadgeIcon,
	floatingBadgeTitle,
	floatingBadgeText,
	scrollToRef,
	scrollText,
}) => {
	const handleScroll = () => {
		if (scrollToRef && scrollToRef.current) {
			scrollToRef.current.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section className="relative bg-gradient-to-b from-white to-sky-50 min-h-screen flex items-center py-8 sm:py-12 md:py-24 font-publicSans">
			{/* Background Blob Elements */}
			<div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
				<div className="absolute -top-20 -right-20 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-cyan-200 rounded-full opacity-40 animate-blob" />
				<div className="absolute -bottom-20 -left-20 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-purple-200 rounded-full opacity-40 animate-blob" />
			</div>

			<div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="flex flex-col lg:flex-row items-center gap-6 md:gap-10 xl:gap-16">
					{/* Content Section */}
					<div className="lg:w-1/2 text-center lg:text-left animate-fadeInUp">
						{/* Badge */}
						{badgeText && (
							<div className="inline-flex items-center bg-sky-100 rounded-full px-3 py-1 mb-4 text-sm md:text-base font-medium text-sky-700">
								{BadgeIcon && <BadgeIcon className="w-4 h-4 mr-2" />}
								{badgeText}
							</div>
						)}

						{/* Heading */}
						<h1 className="text-3xl xs:text-4xl sm:text-[40px] md:text-5xl lg:text-6xl font-belanosima text-gray-900 mb-4 leading-tight">
							{heading}{" "}
							<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-sky-700">
								{headingHighlight}
							</span>{" "}
							{headingEnd}
						</h1>

						{/* Description */}
						<p className="text-gray-600 text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0">
							{description}
						</p>

						{/* CTA Buttons */}
						<div className="flex flex-col xs:flex-row gap-3 justify-center lg:justify-start">
							{primaryButtonText && (
								<button
									onClick={primaryButtonAction}
									className="px-5 py-3 bg-cyan-700 text-white rounded-lg font-medium text-base hover:bg-navy-800 transition-colors w-full xs:w-auto">
									{primaryButtonText}
								</button>
							)}

							{secondaryButtonText && (
								<button
									onClick={secondaryButtonAction}
									className="px-5 py-3 bg-white text-cyan-700 border border-navy-200 rounded-lg font-medium text-base hover:bg-navy-100 transition-colors w-full xs:w-auto flex items-center justify-center gap-2">
									{SecondaryButtonIcon && (
										<SecondaryButtonIcon className="w-5 h-5" />
									)}
									{secondaryButtonText}
								</button>
							)}
						</div>
					</div>

					{/* Image Section */}
					<div className="lg:w-1/2 mt-8 md:mt-10 lg:mt-0 w-full">
						<div className="relative max-w-2xl mx-auto animate-float">
							<div className="absolute -inset-2 sm:-inset-3 bg-sky-100 rounded-xl transform rotate-3" />
							<div className="absolute -inset-2 sm:-inset-3 bg-cyan-200 rounded-xl transform -rotate-3 opacity-70" />

							<img
								src={imageSrc}
								alt={imageAlt}
								className="relative z-10 w-full h-auto object-contain rounded-lg"
							/>

							{/* Floating Badge */}
							{floatingBadgeTitle && (
								<div className="absolute -bottom-3 -right-2 sm:-bottom-4 sm:-right-3 bg-white p-2 sm:p-3 rounded-lg shadow-md flex items-center gap-2 max-w-[140px] sm:max-w-[160px]">
									{FloatingBadgeIcon && (
										<FloatingBadgeIcon className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
									)}
									<div className="flex flex-col truncate">
										<span className="font-semibold text-xs sm:text-sm text-gray-800 truncate">
											{floatingBadgeTitle}
										</span>
										{floatingBadgeText && (
											<span className="text-[10px] sm:text-xs text-gray-500 truncate">
												{floatingBadgeText}
											</span>
										)}
									</div>
								</div>
							)}
						</div>
					</div>
				</div>

				{/* Scroll Prompt */}
				{scrollText && (
					<div
						className="hidden md:flex flex-col items-center mt-10 lg:mt-12 cursor-pointer animate-scroll"
						onClick={handleScroll}>
						<span className="text-sm text-gray-500 mb-2">{scrollText}</span>
						<ArrowDown className="w-6 h-6 text-navy-600" />
					</div>
				)}
			</div>
		</section>
	);
};

export default Hero2;
