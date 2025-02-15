import PropTypes from "prop-types";
import clsx from "clsx";
import { useEffect, useState } from "react";
import axios from "axios";
import BannerSixteenSingle from "../../components/banner/BannerSixteenSingle";

const BASE_URL = process.env.REACT_APP_BASE_URL || "https://anahee-admin.onrender.com";

const BannerSixteen = ({ spaceTopClass, spaceBottomClass }) => {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/images`)
      .then((response) => {
        console.log("✅ API Response:", response.data);
        setBanners(response.data.images);
      })
      .catch((error) => {
        console.error("❌ Error fetching banners:", error);
      });
  }, []);

  return (
    <div className={clsx("banner-area", spaceTopClass, spaceBottomClass)}>
      <div className="row no-gutters">
        {banners.length >= 2 ? (
          banners.slice(22, 25).map((single, key) => (
            <div className="col-lg-6 col-md-6" key={key}>
              <BannerSixteenSingle
                data={single}
                spaceBottomClass="mb-30"
              />
            </div>
          ))
        ) : (
          <p>No banners available</p>
        )}
      </div>
    </div>
  );
};

BannerSixteen.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default BannerSixteen;
