import React from "react";
import { TbBrandWix } from "react-icons/tb";

function DashboardCard01() {
  return (
    <div className="col-span-full mb-10 md:mb-0 xl:col-span-12 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full dark:text-slate-300">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">Brand</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Description</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Members</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Categories</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Tags</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Next Meeting</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-slate-100 dark:divide-slate-700">
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi-J0HuHXGvyb2ZFsHXx8ng88ITTI6uaVX_YPT22LBTg&s"
                      alt=""
                      srcSet=""
                      width="20"
                      className="mr-2"
                    />
                    <div className="text-slate-800 dark:text-slate-100">
                      Wix
                    </div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">Developed a mobile ...</div>
                </td>
                <td className="p-2">
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full overflow-hidden">
                      <img
                        src="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=8ssXDNTp1XAPan8Bg6mJRwG7EXHshFO5o0v9SIj96nY="
                        alt="Member"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-6 h-6 rounded-full overflow-hidden -ml-2">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6RnlAHnxco8aUyhDX7GbWRUiERq7HWZcTXlt92vQi_b-Ugdpe4jCe2hI7Jc2cNmCJxuE&usqp=CAU" />
                    </div>
                    <div className="w-6 h-6 rounded-full overflow-hidden -ml-2">
                      <img src="https://storyblok-cdn.photoroom.com/f/191576/1000x1000/38dc8dba9a/light_blue_background.webp/m/filters:quality(75)" />
                    </div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center m-auto bg-violet-100 rounded-md text-violet-600 border w-fit px-2">Automation</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">#cloud</div>
                </td>
                <td className="p-2">
                  <div className="text-center m-auto bg-green-100 rounded-md text-green-600 border w-fit px-2">in 30 minutes</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <img
                      src="https://www.svgrepo.com/show/303503/shopify-logo.svg"
                      alt=""
                      srcSet=""
                      width="20"
                      className="mr-2"
                    />
                    <div className="text-slate-800 dark:text-slate-100">
                      Shopify
                    </div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">Developed a mobile ...</div>
                </td>
                <td className="p-2">
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full overflow-hidden">
                      <img
                        src="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=8ssXDNTp1XAPan8Bg6mJRwG7EXHshFO5o0v9SIj96nY="
                        alt="Member"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-6 h-6 rounded-full overflow-hidden -ml-2">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6RnlAHnxco8aUyhDX7GbWRUiERq7HWZcTXlt92vQi_b-Ugdpe4jCe2hI7Jc2cNmCJxuE&usqp=CAU" />
                    </div>
                    <div className="w-6 h-6 rounded-full overflow-hidden -ml-2">
                      <img src="https://storyblok-cdn.photoroom.com/f/191576/1000x1000/38dc8dba9a/light_blue_background.webp/m/filters:quality(75)" />
                    </div>
                  </div>
                </td>

                <td className="p-2">
                  <div className="text-center m-auto bg-red-100 rounded-md text-red-600 border w-fit px-2">Ecommerce</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">#cloud</div>
                </td>
                <td className="p-2">
                  <div className="text-center m-auto bg-green-100 rounded-md text-green-600 border w-fit px-2">in 20 minutes</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8WT17w72aAn2yVPjoQ8L65Pk5rN48P6FWpc-VT4ZJ1Q&s"
                      alt=""
                      srcSet=""
                      width="20"
                      className="mr-2 rounded-sm"
                    />
                    <div className="text-slate-800 dark:text-slate-100">
                      MailChimp
                    </div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">Developed a mobile ...</div>
                </td>
                <td className="p-2">
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full overflow-hidden">
                      <img
                        src="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=8ssXDNTp1XAPan8Bg6mJRwG7EXHshFO5o0v9SIj96nY="
                        alt="Member"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-6 h-6 rounded-full overflow-hidden -ml-2">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6RnlAHnxco8aUyhDX7GbWRUiERq7HWZcTXlt92vQi_b-Ugdpe4jCe2hI7Jc2cNmCJxuE&usqp=CAU" />
                    </div>
                    <div className="w-6 h-6 rounded-full overflow-hidden -ml-2">
                      <img src="https://storyblok-cdn.photoroom.com/f/191576/1000x1000/38dc8dba9a/light_blue_background.webp/m/filters:quality(75)" />
                    </div>
                  </div>
                  
                </td>
                <td className="p-2">
                  <div className="text-center m-auto bg-orange-100 rounded-md text-orange-600 border w-fit px-2">SAAS</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">#SmartFinance</div>
                </td>
                <td className="p-2">
                  <div className="text-center m-auto bg-blue-100 rounded-md text-blue-600 border w-fit px-2">Tommorow</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCDLcHoHw_1DfioepNF9JNGWGzwkgPn19tx9O3958u-w&s"
                      alt=""
                      srcSet=""
                      width="20"
                      className="mr-2 rounded-sm"
                    />
                    <div className="text-slate-800 dark:text-slate-100">
                      Pay Pal
                    </div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">Developed a mobile ...</div>
                </td>
                <td className="p-2">
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full overflow-hidden">
                      <img
                        src="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=8ssXDNTp1XAPan8Bg6mJRwG7EXHshFO5o0v9SIj96nY="
                        alt="Member"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-6 h-6 rounded-full overflow-hidden -ml-2">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6RnlAHnxco8aUyhDX7GbWRUiERq7HWZcTXlt92vQi_b-Ugdpe4jCe2hI7Jc2cNmCJxuE&usqp=CAU" />
                    </div>
                    <div className="w-6 h-6 rounded-full overflow-hidden -ml-2">
                      <img src="https://storyblok-cdn.photoroom.com/f/191576/1000x1000/38dc8dba9a/light_blue_background.webp/m/filters:quality(75)" />
                    </div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center m-auto bg-yellow-200 rounded-md text-yello-600 border w-fit px-2">market Place</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">#SmartFinance</div>
                </td>
                <td className="p-2">
                  <div className="text-center m-auto bg-red-100 rounded-md text-red-600 border w-fit px-2">No contact</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <img
                      src="https://seeklogo.com/images/D/disney-logo-575AED0F1D-seeklogo.com.png"
                      alt=""
                      srcSet=""
                      width="20"
                      className="mr-2 rounded-sm"
                    />
                    <div className="text-slate-800 dark:text-slate-100">
                      Disney
                    </div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">Developed a mobile ...</div>
                </td>
                <td className="p-2">
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full overflow-hidden">
                      <img
                        src="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=8ssXDNTp1XAPan8Bg6mJRwG7EXHshFO5o0v9SIj96nY="
                        alt="Member"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-6 h-6 rounded-full overflow-hidden -ml-2">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6RnlAHnxco8aUyhDX7GbWRUiERq7HWZcTXlt92vQi_b-Ugdpe4jCe2hI7Jc2cNmCJxuE&usqp=CAU" />
                    </div>
                    <div className="w-6 h-6 rounded-full overflow-hidden -ml-2">
                      <img src="https://storyblok-cdn.photoroom.com/f/191576/1000x1000/38dc8dba9a/light_blue_background.webp/m/filters:quality(75)" />
                    </div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center m-auto bg-violet-100 rounded-md text-violet-600 border w-fit px-2 ">Automation</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">#digitaltransformation</div>
                </td>
                <td className="p-2">
                  <div className="text-center m-auto bg-green-100 rounded-md text-green-600 border w-fit px-2">in 30 minutes</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <img
                      src="https://cdn.iconscout.com/icon/free/png-256/free-microsoft-26-722716.png"
                      alt=""
                      srcSet=""
                      width="20"
                      className="mr-2 rounded-sm"
                    />
                    <div className="text-slate-800 dark:text-slate-100">
                      Microsoft
                    </div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">Developed a mobile ...</div>
                </td>
                <td className="p-2">
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full overflow-hidden">
                      <img
                        src="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=8ssXDNTp1XAPan8Bg6mJRwG7EXHshFO5o0v9SIj96nY="
                        alt="Member"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-6 h-6 rounded-full overflow-hidden -ml-2">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6RnlAHnxco8aUyhDX7GbWRUiERq7HWZcTXlt92vQi_b-Ugdpe4jCe2hI7Jc2cNmCJxuE&usqp=CAU" />
                    </div>
                    <div className="w-6 h-6 rounded-full overflow-hidden -ml-2">
                      <img src="https://storyblok-cdn.photoroom.com/f/191576/1000x1000/38dc8dba9a/light_blue_background.webp/m/filters:quality(75)" />
                    </div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center m-auto bg-yellow-100 rounded-md text-violet-600 border w-fit px-2">E2C</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">#digitaltransformation</div>
                </td>
                <td className="p-2">
                  <div className="text-center m-auto bg-green-100 rounded-md text-green-600 border w-fit px-2">in 10 minutes</div>
                </td>
              </tr>
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <img
                      src="https://cdn.worldvectorlogo.com/logos/invision.svg"
                      alt=""
                      srcSet=""
                      width="20"
                      className="mr-2 rounded-sm"
                    />
                    <div className="text-slate-800 dark:text-slate-100">
                      Invision
                    </div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">Developed a mobile ...</div>
                </td>
                <td className="p-2">
                  <div className="flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full overflow-hidden">
                      <img
                        src="https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=8ssXDNTp1XAPan8Bg6mJRwG7EXHshFO5o0v9SIj96nY="
                        alt="Member"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-6 h-6 rounded-full overflow-hidden -ml-2">
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6RnlAHnxco8aUyhDX7GbWRUiERq7HWZcTXlt92vQi_b-Ugdpe4jCe2hI7Jc2cNmCJxuE&usqp=CAU" />
                    </div>
                    <div className="w-6 h-6 rounded-full overflow-hidden -ml-2">
                      <img src="https://storyblok-cdn.photoroom.com/f/191576/1000x1000/38dc8dba9a/light_blue_background.webp/m/filters:quality(75)" />
                    </div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center m-auto bg-sky-100 rounded-md text-sky-600 border w-fit px-2">Web Services</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">#digitaltransformation</div>
                </td>
                <td className="p-2">
                  <div className="text-center m-auto bg-green-100 rounded-md text-green-600 border w-fit px-2">in 30 minutes</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard01;
