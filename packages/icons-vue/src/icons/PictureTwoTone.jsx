// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import PictureTwoToneSvg from '@whalue-design/icons-svg/lib/asn/PictureTwoTone';

export default {
  name: 'IconPictureTwoTone',
  displayName: 'PictureTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: PictureTwoToneSvg } },
      children,
    ),
};