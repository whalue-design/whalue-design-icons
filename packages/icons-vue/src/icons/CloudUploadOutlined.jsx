// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import CloudUploadOutlinedSvg from '@whalue-design/icons-svg/lib/asn/CloudUploadOutlined';

export default {
  name: 'IconCloudUploadOutlined',
  displayName: 'CloudUploadOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: CloudUploadOutlinedSvg } },
      children,
    ),
};