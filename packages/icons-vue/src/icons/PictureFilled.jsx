// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import PictureFilledSvg from '@whalue-design/icons-svg/lib/asn/PictureFilled';

export default {
  name: 'IconPictureFilled',
  displayName: 'PictureFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: PictureFilledSvg } },
      children,
    ),
};