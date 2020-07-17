// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import UploadOutlinedSvg from '@whalue-design/icons-svg/lib/asn/UploadOutlined';

export default {
  name: 'IconUploadOutlined',
  displayName: 'UploadOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: UploadOutlinedSvg } },
      children,
    ),
};